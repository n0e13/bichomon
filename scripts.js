console.log(document.title);

// 1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
document.getElementById('gen-1').innerHTML = "Generasión 1 Pokimon";

// 2. Cambia el color de fondo de la primera generación de Pokimon.
document.querySelectorAll('.infocard-list')[0].style.backgroundColor = "rebeccapurple";

// 3. Imprime por consola la URL de la página.
console.log(document.URL);

// 4. Imprime por consola el dominio de la página.
console.log(document.domain);

// 5. Imprime todos los nodos de imagen.
// con span
document.querySelectorAll('.infocard-lg-img');
// con la imagen
document.querySelectorAll('.img-fixed');

// 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
const listLength = document.querySelectorAll('.img-fixed').length;
for (let i = 0; i < listLength; i++) {
    document.querySelectorAll('.img-fixed')[i].setAttribute("src", "https://media.giphy.com/media/2v170e71aanfi/giphy.gif");
}

// 7. Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
const aFlying = document.querySelectorAll('span.infocard-lg-data > small > a.flying');
for (let i = 0; i < aFlying.length; i++) {
    (aFlying[i].parentElement.parentElement).style.backgroundColor = "green";
}



