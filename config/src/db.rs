use std::{collections::HashMap, ops::Index};

use crate::{get_env, read_config_file};
use serde::{Deserialize, Serialize};

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
        let contents = read_config_file("./config/src/db.yaml");
        let mut db: HashMap<String, String> = serde_yaml::from_str(&contents).unwrap();
 
        let env: HashMap<String, String> = get_env("DB_");
        db.extend(env);
        let db_string = serde_yaml::to_string(&db);
        serde_yaml::from_str(&db_string.unwrap()).unwrap()
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
            _ => panic!("invalid key"),
        }
    }
}
