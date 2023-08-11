const boton = document.querySelector('.boton-input')
const ul = document.getElementById('tareas')
const textoInput = document.getElementById('texto')
const taskArray = []

function crearTarea() {
    let texto = document.getElementById('texto').value

    // creando elementos
    const botonEliminar = document.createElement('button')
    const botonDone = document.createElement('button')
    const imgEliminar = document.createElement('img')
    const imgDone = document.createElement('img')
    const div = document.createElement('div')
    const li = document.createElement('li')
    const p = document.createElement('p')

    // agregando elementos al ul y al li
    ul.appendChild(li)
    li.appendChild(div)
    div.appendChild(p)
    div.appendChild(botonEliminar)
    div.appendChild(botonDone)

    taskArray.push(texto)

    for (i = 0; i < taskArray.length; i++) {
        p.innerText = taskArray[i]
    }

    // dando un atributo a li para el disenio
    li.setAttribute('class', 'task')

    // agregando boton para eliminar tareas
    imgEliminar.setAttribute('src', 'icons/delete.svg')
    imgEliminar.setAttribute('class', 'imgEliminar')
    botonEliminar.setAttribute('class', 'botonEliminar')
    botonEliminar.appendChild(imgEliminar)

    // presionando este boton elimina la tarea
    botonEliminar.addEventListener('click', () => {
        let indiceTask
        for (i = 0; i < taskArray.length; i++) {
            indiceTask = taskArray.indexOf(i)
        }

        p.innerText = ''
        div.removeChild(p)
        div.removeChild(botonEliminar)
        div.removeChild(botonDone)
        li.removeChild(div)
        ul.removeChild(li)
    })

    // agregando boton para tareas terminadas
    imgDone.setAttribute('src', 'icons/done.svg')
    imgDone.setAttribute('class', 'imgDone')
    botonDone.setAttribute('class', 'botonDone')
    botonDone.appendChild(imgDone)

    // evento para indicar que las tareas se terminaron
    botonDone.addEventListener('click', () => {
        const taskNotDoneSelector = document.querySelector('.task')
        const ulTaskDone = document.getElementById('terminado')
        const divNotDoneSelector = document.querySelector('.container-tarea')

        ulTaskDone.appendChild(taskNotDoneSelector)
        divNotDoneSelector.removeChild(botonDone)
        divNotDoneSelector.removeChild(botonEliminar)
    })

    // seleccionando y agregando un atributo al div
    div.setAttribute('class', 'container-tarea')
}

// haciendo click al boton se puede agregar tareas
boton.addEventListener('click', () => {
    crearTarea()
    console.log(taskArray)
    textoInput.value = ''
})

// esta funcion lo que hace es agregar tareas presionando Enter
textoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        crearTarea()
        console.log(taskArray)
        textoInput.value = ''
    }
})

// agregar las tareas en un array y los imprima en la pagina: HECHO

// cuando quiera eliminar, que se elimine del dom y del array
