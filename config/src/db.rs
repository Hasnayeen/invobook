use std::ops::Index;

use crate::Env;
use serde::{Deserialize, Serialize};
use tracing::error;

#[derive(Deserialize, Serialize, Debug)]
pub struct Db {
    namespace: String,
    database: String,
    username: String,
    password: String,
    url: String,
    port: String,
}

impl Db {
    pub fn new() -> Db {
        let env = Env::new();

        Self {
            namespace: env.get("DB_NAMESPACE", Some("larks")),
            database: env.get("DB_DATABASE", Some("larks")),
            username: env.get("DB_USERNAME", Some("larks")),
            password: env.get("DB_PASSWORD", Some("larks")),
            url: env.get("DB_URL", Some("localhost")),
            port: env.get("DB_PORT", Some("8000")),
        }
    }
}

impl Default for Db {
    fn default() -> Self {
        Self::new()
    }
}

impl Index<&str> for Db {
    type Output = String;

    fn index(&self, index: &str) -> &Self::Output {
        match index {
            "namespace" => &self.namespace,
            "database" => &self.database,
            "username" => &self.username,
            "password" => &self.password,
            "url" => &self.url,
            "port" => &self.port,
            _ => {
                error!("invalid key");
                panic!("invalid key");
            }
        }
    }
}
