use axum::{Router, routing::{get, get_service, MethodRouter}, http::StatusCode};
use crate::handlers::{home, not_found};
use tower_http::services::ServeDir;

pub async fn app() -> Router {
    Router::new()
        .route("/", get(home))
        .nest_service("/public", serve_public_assets())
        .fallback(not_found)
}

fn serve_public_assets() -> MethodRouter {
    get_service(ServeDir::new("../views/public")).handle_error(|error| async move {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Internal Error {}", error),
        )
    })
}
