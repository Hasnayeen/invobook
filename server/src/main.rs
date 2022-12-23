#[tokio::main]
async fn main() {
    data::start_db().await.expect("Failed to connect to DB");
    server::start().await;
}
