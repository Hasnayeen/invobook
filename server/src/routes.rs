use axum::{Router, routing::get};
use crate::handlers::{home, not_found};

pub async fn app() -> Router {
    Router::new()
        .route("/", get(home))
        .fallback(not_found)
}
