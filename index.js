window.onload = () => {
    fetch('https://opendata.wifi.at/OpenJsonData.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}