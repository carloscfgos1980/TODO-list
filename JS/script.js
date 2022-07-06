const addTask = document.querySelector('#add-task');

const addBtn = addTask.querySelector('button');

const newTask = document.querySelector('#new-task ul');

const forms = document.forms;

const addForm = forms['add-task'];

addBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const value = addForm.querySelector('input[type="text"]').value;

    postData(value);

    getData();

});


newTask.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.className === 'delete') {

        const text = e.target.previousElementSibling.textContent;
        //console.log(text)

        deleteTasks(text);

        const li = e.target.parentElement;
        li.parentNode.removeChild(li);

    }
});

getData();
