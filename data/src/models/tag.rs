use chrono::{DateTime, Utc};

struct Tag {
    id: i32,
    name: String,
    slug: String,
    created_at: DateTime<Utc>,
    updated_at: DateTime<Utc>,
}
