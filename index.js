window.onload = () => {
    fetch('client-data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                // document.getElementById('test').innerHTML = data[i] + '<br>'
                document.getElementById('test').append(JSON.stringify(data[i]))
            }
        })
}