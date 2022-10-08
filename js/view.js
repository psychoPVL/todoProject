export default class View {
    constructor(tasks) {
        tasks.forEach((task) => {
            this.renderTask(task);
        });
    }

    elements = {
        input: document.querySelector('#newTask'),
        form: document.querySelector('#form'),
        taskList: document.querySelector('#taskList'),
    };

    renderTask(taskObject) {
        let completeClass = '';
        let checked = '';

        if (taskObject.status === 'done') {
            completeClass = 'completed';
            checked = 'checked';
        }

        const taskHtml = `<li class="todo-item" data-id="${taskObject.id}">
                                <label class="todo-item-label">
                                    <input class="checkbox" type="checkbox" ${checked} />
                                    <span class="${completeClass}">${taskObject.text}</span>
                                    <button class="btn btn-secondary btn-sm" data-delete>Удалить</button>
                                </label>
                            </li>`;
        this.elements.taskList.insertAdjacentHTML('beforeend', taskHtml);
    }

    clearInput() {
        this.elements.input.value = '';
    }

    changeStatus(taskObject) {
        const taskElement = this.elements.taskList.querySelector(`[data-id="${taskObject.id}"]`);
        const taskTextEl = taskElement.querySelector('span');
        if (taskObject.status === 'done') {
            taskTextEl.classList.add('completed');
        } else {
            taskTextEl.classList.remove('completed');
        }
    }
    removeTask(taskObject) {
        const taskElement = this.elements.taskList.querySelector(`[data-id="${taskObject.id}"]`);
        taskElement.remove();
    }
}
