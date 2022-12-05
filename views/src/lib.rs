use askama::Template;

#[derive(Template)]
#[template(path = "home.html")]
struct HelloTemplate<'a> {
    name: &'a str,
}

#[derive(Template)]
#[template(path = "404.html")]
struct NotFoundTemplate {}

pub fn home() -> String {
    HelloTemplate { name: "World" }.render().unwrap()
}

pub fn not_found() -> String {
    NotFoundTemplate {}.render().unwrap()
}
