use tracing::info;

mod handlers;
pub mod routes;

pub async fn start() {
    info!(
        "Starting server on {}:{}...",
        config::CONFIG.app["url"],
        config::CONFIG.app["port"]
    );
    let app = routes::app().await;
    let url = format!(
        "{}:{}",
        config::CONFIG.app["url"],
        config::CONFIG.app["port"]
    );

    axum::Server::bind(&url.parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap()
}
