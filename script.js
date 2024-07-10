// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task')
    const addTaskButton = document.getElementById('add-task')
    const taskList = document.getElementById('task-list')

    addTaskButton.addEventListener('click', addTask)

    function addTask() {
        const taskText = taskInput.value.trim()
        if (taskText !== '') {
            const taskItem = document.createElement('li')
            
            const checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.addEventListener('change', toggleTaskCompletion)

            const taskLabel = document.createElement('span')
            taskLabel.textContent = taskText

            const removeButton = document.createElement('button')
            removeButton.textContent = 'Remover'
            removeButton.addEventListener('click', removeTask)

            taskItem.appendChild(checkbox)
            taskItem.appendChild(taskLabel)
            taskItem.appendChild(removeButton)

            taskList.appendChild(taskItem)
            taskInput.value = ''
            taskInput.focus()
        }
    }

    function removeTask(event) {
        const taskItem = event.target.parentElement
        taskList.removeChild(taskItem)
    }

    function toggleTaskCompletion(event) {
        const taskItem = event.target.parentElement
        const removeButton = taskItem.querySelector('button')
        const concluido = document.createElement('p')
        concluido.textContent = 'Tarefa Concluída'

        if (event.target.checked) {
            taskItem.classList.add('completed')
            if (removeButton) {
                taskItem.removeChild(removeButton)
                taskItem.appendChild(concluido)
            }
        } else {
            taskItem.classList.remove('completed')
            const newRemoveButton = document.createElement('button')
            newRemoveButton.textContent = 'Remover'
            newRemoveButton.addEventListener('click', removeTask)
            taskItem.appendChild(newRemoveButton)
            const concluidoElem = taskItem.querySelector('p')
            if (concluidoElem) {
                taskItem.removeChild(concluidoElem)
            }
        }
    }
})
