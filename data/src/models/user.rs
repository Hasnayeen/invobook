use chrono::{DateTime, Utc};

pub struct User {
    id: i32,
    pub name: String,
    email: String,
    password: String,
    created_at: DateTime<Utc>,
    updated_at: DateTime<Utc>,
}

impl User {
    pub fn new(id: i32, name: String, email: String, password: String) -> Self {
        Self {
            id,
            name,
            email,
            password,
            created_at: Utc::now(),
            updated_at: Utc::now(),
        }
    }
}
