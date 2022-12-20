use chrono::{DateTime, Utc};

pub struct Tag {
    pub id: i32,
    pub name: String,
    pub slug: String,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}
