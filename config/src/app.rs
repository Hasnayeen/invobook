use std::{collections::HashMap, ops::Index};

use crate::{get_env, read_config_file};
use serde::{Deserialize, Serialize};

#[derive(Deserialize, Serialize, Debug)]
pub struct App {
    name: String,
    version: String,
    url: String,
    port: String,
}

impl App {
    pub fn new() -> App {
        let contents = read_config_file("./config/src/app.yaml");
        let mut app: HashMap<String, String> = serde_yaml::from_str(&contents).unwrap();

        let env: HashMap<String, String> = get_env("APP_");
        app.extend(env);
        let app_string = serde_yaml::to_string(&app);
        serde_yaml::from_str(&app_string.unwrap()).unwrap()
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
            _ => panic!("invalid key"),
        }
    }
}
