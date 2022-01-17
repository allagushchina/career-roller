window.onload = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById("test").innerHTML = JSON.stringify(data)
        })
}