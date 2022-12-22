extern crate axum;

pub mod routes;
mod handlers;

pub async fn start()  {
    let app = routes::app().await;
    let url = format!("{}:{}", config::CONFIG.app["url"], config::CONFIG.app["port"]);

    axum::Server::bind(&url.parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap()
}
