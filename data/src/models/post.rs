use super::Tag;
use super::User;

pub struct Post {
    id: i32,
    pub title: String,
    pub body: String,
    published: Option<bool>,
    tags: Vec<Tag>,
    pub owner: User,
}

impl Post {
    pub fn new(id: i32, title: String, body: String, owner: User) -> Self {
        Self {
            id,
            title,
            body,
            published: Default::default(),
            tags: vec![],
            owner,
        }
    }
}
