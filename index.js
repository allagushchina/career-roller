window.onload = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/', )
        .then(response => response.json())
        .then(data => {
            document.write(data[Math.floor(Math.random()*data.length)].title)
        });
}