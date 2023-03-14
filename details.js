const containerDetails = document.getElementById("container_cards")

const querySearch = window.location.search

// console.log(querySearch);

const param = new URLSearchParams(querySearch).get("id")

// const params = querySearch.substring(1).split("&")

// console.log(params);

// let parametros = {}

// params.forEach(param => {
//     const key = param.split("=")[0]
//     const value = param.split("=")[1]

//     parametros[key] = value
// })

// console.log(parametros); 

const excursion = data.find(lugar => lugar.id == param)


// console.log(excursion);

if(excursion){
const peligros = excursion.peligros.join(" - ")

    containerDetails.innerHTML = `

    <article class="card-details">
        <img src="${excursion.imgUrl}" alt="">
        <div class="info">
            <h3>${excursion.nombre}</h3>
            <p><span class="bold">Descripcion:</span> ${excursion.descripcion}</p>
            <p><span class="bold">Price:</span> ${excursion.excursion}</p>
            <p><span class="bold">Peligros:</span> ${peligros}</p>
        </div>
    </article>

`
}else{
    containerDetails.innerHTML = `
        <h3 style="color: red; font-size: 1.5em">No hay detalles...</h3>
    `
}


