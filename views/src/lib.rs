use askama::Template;
use data::models::Tag;

#[derive(Template)]
#[template(path = "home.html")]
struct HomeTemplate<'a> {
    name: &'a str,
    tag: Tag,
}

#[derive(Template)]
#[template(path = "404.html")]
struct NotFoundTemplate {}

pub fn home(tag: Tag) -> String {
    HomeTemplate { name: "World", tag }.render().unwrap()
}

pub fn not_found() -> String {
    NotFoundTemplate {}.render().unwrap()
}
