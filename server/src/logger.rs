use config::CONFIG;
use tracing::{info, subscriber};
use tracing_appender::non_blocking::WorkerGuard;
use tracing_subscriber::{filter, prelude::*, Registry};

pub fn start() -> WorkerGuard {
    let file_appender = tracing_appender::rolling::never(
        &CONFIG.logging["file"].config["path"],
        &CONFIG.logging["file"].config["filename"],
    );
    let (non_blocking, guard) = tracing_appender::non_blocking(file_appender);
    let stdout_log = tracing_subscriber::fmt::layer()
        .pretty()
        .with_thread_names(true)
        .with_thread_ids(true)
        .with_filter(filter::LevelFilter::TRACE);
    let layer_file = tracing_subscriber::fmt::layer()
        .pretty()
        .json()
        .with_writer(non_blocking)
        .with_filter(filter::LevelFilter::TRACE);
    let subscriber = Registry::default().with(stdout_log).with(layer_file);
    subscriber::set_global_default(subscriber).expect("Failed to set global default");
    info!("Logging started");
    guard
}
