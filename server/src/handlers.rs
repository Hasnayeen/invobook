use axum::response::Html;

pub async fn home () -> Html<&'static str> {
    Html("<h1>Home</h1>")
}
