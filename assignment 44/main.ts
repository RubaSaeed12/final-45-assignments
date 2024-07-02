function make_sandwhich(...items:string[]) {
    console.log(`Making a sandwich with: ${items.join(',')}`)
}
make_sandwhich("ham", "cheese")
make_sandwhich("lettuce", "tomato")
make_sandwhich("avocado", "mayo", "ketchup")