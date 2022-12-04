use axum::{Router, routing::get};
use crate::handlers::home;

pub async fn app() -> Router {
    Router::new()
        .route("/", get(home))
}

#[cfg(test)]
mod tests {
    use axum::http::StatusCode;
    use axum_test_helper::TestClient;

    use super::app;

    #[tokio::test]
    async fn home() {
        let app = app();
        let client = TestClient::new(app.await);
        let response = client.get("/").send().await;
        assert_eq!(response.status(), StatusCode::OK);
        assert!(response.text().await.contains("Home"));
    }
}
