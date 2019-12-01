

export function getBooks(){
    fetch('http://localhost:4000/books')
    .then(response => response.json())
    .then(json => console.log(json))
}