document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addNote = document.getElementById("addNote");
    const noteList = document.getElementById("noteList");

    addNote.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;
            noteList.appendChild(taskItem);
            taskInput.value = "";

            taskItem.querySelector(".delete").addEventListener("click", function() {
                taskItem.remove();
            });

        /*    taskItem.addEventListener("click", function() {
                taskItem.classList.toggle("completed");
            }); */
        }
    });
});
