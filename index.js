window.onload = () => {
    document.getElementById('re-roll').addEventListener('click', job)
    job()
}

function job() {
    fetch('./data/json.json')
        .then(response => response.json())
        .then(data => {
            let index = Math.floor(Math.random()*data.length)
            document.getElementById('job').innerText = data[index].Titel

            let paths = document.getElementsByTagName('path')
            for (let i = 0; i < paths.length; i++) {
                document.getElementsByTagName('path')[i].classList.remove('set')
            }

            if (data[index].Province.substring(0, 1) !== 'K') {
                document.getElementById(data[index].Province.substring(0, 2)).classList.add('set')
            } else {
                document.getElementById('Kr').classList.add('set')
            }

            document.getElementById('scroll').classList.remove('vis')
            document.getElementById('desc').classList.remove('vis')
            document.getElementById('was').innerHTML = data[index].Description
            if (document.getElementById('was').textContent.length > 10) {
                document.getElementById('desc').classList.add('vis')
                if (window.innerWidth > 1000)
                document.getElementById('scroll').classList.add('vis')
            }
            
        })       
}

$('#scroll').on('click', () => {
    $('#main').animate({
        scrollTop: $('#desc').offset().top -100
    }, 500)
})



/*document.getElementById('was').innerHTML = data[index].Description
            document.getElementById('was').innerText = document.getElementById('was').innerHTML.text()*/
            