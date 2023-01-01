use axum::{
    http::StatusCode,
    response::{Html, IntoResponse},
};
use data::models::{Post, User};
use views::home as home_view;
use views::not_found as not_found_view;

pub async fn home() -> Html<String> {
    let owner = User::new(
        "1".to_string(),
        "John Doe".to_string(),
        "john@example.com".to_string(),
        "secret".to_string(),
    );
    let post = Post::new(
        1,
        "First post!".to_string(),
        "This is a post".to_string(),
        owner,
    );
    Html(home_view(post))
}

pub async fn not_found() -> impl IntoResponse {
    (StatusCode::NOT_FOUND, Html(not_found_view()))
}
