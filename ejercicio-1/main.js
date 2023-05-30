let texto = document.getElementById('texto')
let button = document.getElementById('Cambiardecolor');
let cambiarcolor = false;

button.addEventListener('click', ()=>{
    if (cambiarcolor) {
        texto.classList.toggle('naranja')
        button.value="purpura"
    } else{
        texto.classList.add('naranja')
        button.value="naranja"
    }
    cambiarcolor = !cambiarcolor;
})
