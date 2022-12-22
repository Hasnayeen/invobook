use askama::Template;
use data::models::Post;

#[derive(Template)]
#[template(path = "home.html")]
struct HomeTemplate {
    post: Post,
}

#[derive(Template)]
#[template(path = "404.html")]
struct NotFoundTemplate {}

pub fn home(post: Post) -> String {
    HomeTemplate { post }.render().unwrap()
}

pub fn not_found() -> String {
    NotFoundTemplate {}.render().unwrap()
}
