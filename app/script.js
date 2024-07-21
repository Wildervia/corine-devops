document.getElementById('add-task').addEventListener('click', function() {
    var taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    var li = document.createElement('li');
    li.textContent = taskText;

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteButton);
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    document.getElementById('task-list').appendChild(li);
    document.getElementById('new-task').value = '';
});
