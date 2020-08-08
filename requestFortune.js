export function requestFortune() {
    fetch('https://a9vymko126.execute-api.ca-central-1.amazonaws.com/test', {
        method: "GET"
    }).then(response => response.json())
    .then(data => document.getElementById('fortune-text').innerHTML = data)
}