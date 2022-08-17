window.addEventListener('load', ()=> {

    const formCrear = document.getElementById('form-crear')   
    const listaTareas = document.getElementById('lista-tareas')
    const inputCrear = document.getElementById('crear')
    const inputBuscar = document.getElementById('buscar')    
   
    formCrear.addEventListener('submit', (e) => {
        e.preventDefault()
        capturarValor()
    })    
    const capturarValor = ()=> {
        const tareaNombre = inputCrear.value.trim()
    
        ;(tareaNombre.length) ? mostrarTareaHtml(tareaNombre) : alert('Debe ingresar un valor')        
    }

    const mostrarTareaHtml = (tarea) => {        
        const liHtml = `<li class="list-group-item d-flex justify-content-between"><strong>${tarea}</strong><i class="bi bi-trash borrar"></i></li>`
        listaTareas.innerHTML += liHtml
        formCrear.reset()
    };


    inputBuscar.addEventListener('keyup', () => {        
        const caracter = inputBuscar.value.trim()        
        busqueda(caracter)        
    })
 
    const busqueda = (cadena) => {
        let arreglo = Array.from(listaTareas.children)
        arreglo
            .filter(texto => !texto.textContent.toLowerCase().includes(cadena))
            .forEach(cadenaFiltrada => {
                cadenaFiltrada.classList.add('textoFiltrado')                
            })

        arreglo
            .filter(texto => texto.textContent.toLowerCase().includes(cadena))
            .forEach(cadenaFiltrada => {
                cadenaFiltrada.classList.remove('textoFiltrado')                
            })
    }
    listaTareas.addEventListener('click', (e) => {     
        if (e.target.classList.contains('borrar')) {
            e.target.parentElement.remove()
        }
        inputBuscar.value = ''
    })
})