window.onload = () => {
    // Datei ist ein Ausschnitt von https://opendata.wifi.at/OpenJsonData.json, da Seite keine Requests erlaubt
    fetch('client-data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById("test").innerHTML = JSON.stringify(data)
        })
}