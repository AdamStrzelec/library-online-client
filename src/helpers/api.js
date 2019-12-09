export const get = url => {
    const result = fetch(url)
        .then(response => response.json())
        return result
}