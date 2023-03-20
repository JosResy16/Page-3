window.addEventListener("load" , ()=>{
    const btn_bars = document.getElementById("btn-bars");
    const ul = document.querySelector("ul");
    const btn_cerrar = document.getElementById("menu-cerrar");
    const menu_abrir = document.getElementById("menu-abrir");

    btn_bars.addEventListener("click" , ()=>{
        ul.classList.toggle("visible");
        btn_cerrar.classList.toggle("visible")
        menu_abrir.classList.toggle("salir")
    })

    // SECCIÓN DE SLIDE
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove("show");
            }
        })
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // FIN SECCIÓN DE SLIDE

    // SECCIÓN DE PREGUNTAS FRECUENTES (PAGE CONTACTO)

    const preguntas = document.querySelectorAll(".pregunta")

    preguntas.forEach((pregunta) => {
        pregunta.addEventListener("click" , (e) => {
            let nodo = e.target;
            let resp = nodo.parentNode.querySelector(".respuesta").classList

            resp.toggle("visible");
            
        })
    })

    // FIN DE SECCIÓN PREGUNTAS FRECUENTES
})