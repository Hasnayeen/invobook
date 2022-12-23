mod app;
mod db;

use std::{collections::HashMap, fs};
use lazy_static::lazy_static;
use app::App;
use db::Db;

pub struct Config {
    pub app: App,
    pub db: Db,
}

lazy_static! {
    pub static ref CONFIG: Config = Config { 
        app: App::new(),
        db: Db::new(),
    };
}

fn get_env(prefix: &str) -> HashMap<String, String> {
    let env: Result<HashMap<String, String>, dotenvy::Error> = dotenvy::from_filename_iter(".env").unwrap().collect();

    if let Ok(map) = env {
        map.into_iter()
            .filter(|(key, _)| key.starts_with(prefix))
            .filter(|(_, value)| !value.is_empty())
            .map(|(key, value)| {
                (key.replace(prefix, "").to_lowercase(), value)
            })
            .collect()
    } else {
        HashMap::new()
    }
}

fn read_config_file(name: &str) -> String {
    fs::read_to_string(name).unwrap()
}
