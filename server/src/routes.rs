use axum::{Router, routing::get};
use crate::handlers::home;

pub async fn app() -> Router {
    Router::new()
        .route("/", get(home))
}
