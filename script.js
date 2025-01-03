document.addEventListener("DOMContentLoaded", () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskNameInput = document.getElementById('task-name');
    const categorySelect = document.getElementById('category');
    const filterCategorySelect = document.getElementById('filter-category');
    const taskList = document.getElementById('task-list');
    const clearAllBtn = document.getElementById('clear-all-btn');

    // Function to add a task
    function addTask() {
        const taskName = taskNameInput.value.trim();
        const category = categorySelect.value;

        if (taskName === "") return alert("Please enter a task name");

        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <span class="task-text">${taskName} (${category})</span>
            <button class="complete-btn">Complete</button>
            <button class="remove-btn">Remove</button>
        `;

        // Mark task as complete
        taskItem.querySelector('.complete-btn').addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        // Remove task
        taskItem.querySelector('.remove-btn').addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

      
        taskList.appendChild(taskItem);
        taskNameInput.value = ''; 
    }

    // Function to filter tasks by category
    function filterTasks() {
        const selectedCategory = filterCategorySelect.value;
        const tasks = taskList.querySelectorAll('li');

        tasks.forEach(task => {
            const taskCategory = task.quearySelector('.task-text').textContent.split('(')[1].split(')')[0];
            if (selectedCategory === "All" || taskCategory === selectedCategory) {
                task.style.display = 'flex';
            } else {
                task.style.display = 'none';
            }
        });
    }

    // Clear all tasks
    function clearAllTasks() {
        taskList.innerHTML = '';
    }

    // Event listeners
    addTaskBtn.addEventListener('click', addTask);
    filterCategorySelect.addEventListener('change', filterTasks);
    clearAllBtn.addEventListener('click', clearAllTasks);
});
