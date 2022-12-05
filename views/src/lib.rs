use askama::Template;

#[derive(Template)]
#[template(path = "home.html")]

struct HelloTemplate<'a> {
    name: &'a str,
}

pub fn home() -> String {
    HelloTemplate { name: "World" }.render().unwrap()
}
