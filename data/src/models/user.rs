use argon2::Config;
use chrono::{DateTime, Utc};
use rand::{rngs::ThreadRng, Rng};
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct User {
    id: String,
    pub name: String,
    pub email: String,
    password: String,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl User {
    pub fn new(id: String, name: String, email: String, password: String) -> Self {
        let mut rng = ThreadRng::default();
        let salt: [u8; 32] = rng.gen();
        let config = Config::default();
        let hash = argon2::hash_encoded(password.as_bytes(), &salt, &config).unwrap();
        Self {
            id,
            name,
            email,
            password: hash,
            created_at: Utc::now(),
            updated_at: Utc::now(),
        }
    }
}
