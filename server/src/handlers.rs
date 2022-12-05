use axum::response::Html;
use views::home as home_view;

pub async fn home () -> Html<String> {
    Html(home_view())
}
