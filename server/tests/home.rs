use axum::http::StatusCode;
use axum_test_helper::TestClient;
use pretty_assertions::assert_eq;

use server::routes::app;

#[tokio::test]
async fn home() {
    let app = app();
    let client = TestClient::new(app.await);
    let response = client.get("/").send().await;
    assert_eq!(response.status(), StatusCode::OK);
    assert!(response.text().await.contains("Home"));
}
