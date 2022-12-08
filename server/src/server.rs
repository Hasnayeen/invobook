extern crate axum;

pub mod routes;
mod handlers;

pub async fn start()  {
    let app = routes::app().await;

    axum::Server::bind(&"0.0.0.0:8888".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap()
}
