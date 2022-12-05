use axum::{response::{Html, IntoResponse}, http::StatusCode};
use views::home as home_view;
use views::not_found as not_found_view;

pub async fn home() -> Html<String> {
    Html(home_view())
}

pub async fn not_found() -> impl IntoResponse {
    (StatusCode::NOT_FOUND, Html(not_found_view()))
}
