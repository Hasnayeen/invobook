mod logger;

use tracing::{error, info};

#[tokio::main]
async fn main() {
    let _guard = logger::start();
    match data::start_db().await {
        Ok(_) => info!("Connected to DB"),
        Err(e) => error!("Failed to connect to DB: {}", e),
    }
    server::start().await;
}
