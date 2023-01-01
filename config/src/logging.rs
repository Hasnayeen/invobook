use std::{collections::HashMap, ops::Index};

use crate::Env;
use serde::{Deserialize, Serialize};

#[derive(Deserialize, Serialize, Debug)]
pub struct Logging {
    pub channels: Vec<Channel>,
}

#[derive(Deserialize, Serialize, Debug)]
pub enum Level {
    Debug,
    Info,
    Warn,
    Error,
    Trace,
}

#[derive(Deserialize, Serialize, Debug)]
pub struct Channel {
    name: String,
    enabled: bool,
    pub level: Level,
    pub config: HashMap<String, String>,
}

impl Logging {
    pub fn new() -> Logging {
        let env = Env::new();

        Self {
            channels: vec![
                Channel {
                    name: "console".to_string(),
                    enabled: true,
                    level: Level::Debug,
                    config: HashMap::new(),
                },
                Channel {
                    name: "file".to_string(),
                    enabled: true,
                    level: Level::Debug,
                    config: vec![
                        ("type".to_string(), env.get("LOG_FILE_TYPE", Some("daily"))),
                        ("path".to_string(), "logs".to_string()),
                        ("filename".to_string(), "larks.log".to_string()),
                    ]
                    .into_iter()
                    .collect(),
                },
                Channel {
                    name: "slack".to_string(),
                    enabled: false,
                    level: Level::Debug,
                    config: vec![
                        ("token".to_string(), env.get("SLACK_TOKEN", None)),
                        (
                            "webhook_url".to_string(),
                            env.get("SLACK_WEBHOOK_URL", None),
                        ),
                        ("channel".to_string(), "#general".to_string()),
                    ]
                    .into_iter()
                    .collect(),
                },
            ],
        }
    }
}

impl Default for Logging {
    fn default() -> Self {
        Self::new()
    }
}

impl Index<&str> for Logging {
    type Output = Channel;

    fn index(&self, index: &str) -> &Self::Output {
        self.channels
            .iter()
            .find(|channel| channel.name == index)
            .unwrap()
    }
}
