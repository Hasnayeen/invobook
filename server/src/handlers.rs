use axum::{response::{Html, IntoResponse}, http::StatusCode};
use views::home as home_view;
use views::not_found as not_found_view;
use data::models::Tag;

pub async fn home() -> Html<String> {
    let tag = Tag {
        id: 1,
        name: "Nehal".to_string(),
        slug: "rust".to_string(),
        created_at: chrono::Utc::now(),
        updated_at: chrono::Utc::now(),
    };
    Html(home_view(tag))
}

pub async fn not_found() -> impl IntoResponse {
    (StatusCode::NOT_FOUND, Html(not_found_view()))
}
