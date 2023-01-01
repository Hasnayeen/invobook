mod app;
mod db;
mod logging;

use app::App;
use db::Db;
use lazy_static::lazy_static;
use logging::Logging;
use std::{collections::HashMap, fs};

pub struct Config {
    pub app: App,
    pub db: Db,
    pub logging: Logging,
}

struct Env {
    values: HashMap<String, String>,
}

impl Env {
    fn new() -> Env {
        if let Ok(values) = dotenvy::from_filename_iter(".env").unwrap().collect() {
            Env { values }
        } else {
            Env {
                values: HashMap::new(),
            }
        }
    }

    fn get(&self, key: &str, default: Option<&str>) -> String {
        self.values
            .get(key)
            .map(|value| value.to_string())
            .unwrap_or_else(|| default.unwrap_or_default().to_string())
    }
}

lazy_static! {
    pub static ref CONFIG: Config = Config {
        app: App::new(),
        db: Db::new(),
        logging: Logging::new(),
    };
}

fn get_env(prefix: &str) -> HashMap<String, String> {
    let env: Result<HashMap<String, String>, dotenvy::Error> =
        dotenvy::from_filename_iter(".env").unwrap().collect();

    if let Ok(map) = env {
        map.into_iter()
            .filter(|(key, _)| key.starts_with(prefix))
            .filter(|(_, value)| !value.is_empty())
            .map(|(key, value)| (key.replace(prefix, "").to_lowercase(), value))
            .collect()
    } else {
        HashMap::new()
    }
}

fn read_config_file(name: &str) -> String {
    fs::read_to_string(name).unwrap()
}
