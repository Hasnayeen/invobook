use axum::{response::{Html, IntoResponse}, http::StatusCode};
use views::home as home_view;
use views::not_found as not_found_view;
use data::models::{Post, User};

pub async fn home() -> Html<String> {
    let owner = User::new(1, "John Doe".to_string(), "john@example.com".to_string(), "secret".to_string());
    let post = Post::new(1, "First post!".to_string(), "This is a post".to_string(), owner);
    Html(home_view(post))
}

pub async fn not_found() -> impl IntoResponse {
    (StatusCode::NOT_FOUND, Html(not_found_view()))
}
