use anyhow::Result;
use surrealdb_rs::{param::Root, protocol::Ws, Surreal};
use tracing::info;

pub mod models;

pub async fn start_db() -> Result<()> {
    let url = config::CONFIG.db["url"].to_string() + ":" + &config::CONFIG.db["port"];
    let client = Surreal::connect::<Ws>(url).await?;
    client
        .signin(Root {
            username: &config::CONFIG.db["username"],
            password: &config::CONFIG.db["password"],
        })
        .await?;
    client
        .use_ns(&config::CONFIG.db["namespace"])
        .use_db(&config::CONFIG.db["database"])
        .await?;
    client.health().await?;
    info!("Connected to DB");

    Ok(())
}
