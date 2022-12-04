extern crate axum;

mod routes;
mod handlers;

#[tokio::main]
async fn main() {
    let app = routes::app().await;

    axum::Server::bind(&"0.0.0.0:4000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap()
}
