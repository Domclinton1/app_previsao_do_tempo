let key = "24a2d0532a2d5d21359fda9b5e2dc83f"

function colocarDadosNaTela(dados){
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name

    document.querySelector(".weather").innerHTML =  Math.floor(dados.main.temp) + "°C"

    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description

    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"

    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
    

    let dados = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json()) 

    colocarDadosNaTela(dados)
    
}


function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-city").value
    
    buscarCidade(cidade)
}

