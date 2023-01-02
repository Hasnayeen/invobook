use std::{collections::HashMap, ops::Index};

use crate::Env;
use serde::{Deserialize, Serialize};
use tracing::error;

#[derive(Deserialize, Serialize, Debug)]
pub struct App {
    name: String,
    version: String,
    url: String,
    port: String,
}

impl App {
    pub fn new() -> App {
        let env = Env::new();

        Self {
            name: env.get("APP_NAME", Some("Larks")),
            version: env.get("APP_VERSION", Some("0.1.0")),
            url: env.get("APP_URL", Some("http://localhost")),
            port: env.get("APP_PORT", Some("8080")),
        }
    }
}

impl Default for App {
    fn default() -> Self {
        Self::new()
    }
}

impl Index<&str> for App {
    type Output = String;

    fn index(&self, index: &str) -> &Self::Output {
        match index {
            "name" => &self.name,
            "version" => &self.version,
            "url" => &self.url,
            "port" => &self.port,
            _ => {
                error!("invalid key");
                panic!("invalid key");
            }
        }
    }
}
