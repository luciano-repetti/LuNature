function printCards(){
    const containerCards = document.getElementById("container_cards")
    let template = ""
    let name = "pepito"
    data.forEach(excursion => {
        template += `
        <article class="card">
            <img src="${excursion.imgUrl}" alt="${excursion.nombre}">
            <h3>${excursion.nombre}</h3>
            <p>descripcion: ${excursion.descripcion}</p>
            <div class="boton">
                <a href="./details.html?id=${excursion.id}">Ver mas</a>
            </div>
        </article>
        `
    })

    containerCards.innerHTML += template
}


printCards()
