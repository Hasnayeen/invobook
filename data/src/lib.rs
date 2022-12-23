use anyhow::Result;
use surrealdb_rs::{Surreal, protocol::Ws, param::Root};

pub mod models;

pub async fn start_db() -> Result<()> {
    println!("Connecting to DB");
    let url = config::CONFIG.db["url"].to_string() + ":" + &config::CONFIG.db["port"];
    let client = Surreal::connect::<Ws>(url).await?;

    client.signin(Root {
        username: &config::CONFIG.db["username"],
        password: &config::CONFIG.db["password"],
    }).await?;
    client.use_ns(&config::CONFIG.db["namespace"]).use_db(&config::CONFIG.db["database"]).await?;
    client.health().await?;
    println!("Connected to DB");

    Ok(())
}
