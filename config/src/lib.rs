mod app;

use std::{collections::HashMap, fs};
use lazy_static::lazy_static;
use app::App;

pub struct Config {
    pub app: App,
}

lazy_static! {
    pub static ref CONFIG: Config = Config { app: App::new() };
}

// pub fn get() -> &'static Config {
//     &*CONFIG
// }

fn get_env() -> Option<HashMap<String, String>> {
    let env = dotenvy::from_filename_iter(".env").unwrap().collect();
    if let Ok(map) = env {
        Some(map)
    } else {
        None
    }
}

fn read_config_file(name: &str) -> String {
    fs::read_to_string(name).unwrap()
}
