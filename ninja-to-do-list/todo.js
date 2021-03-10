const addForm = document.querySelector('.add');
const todos = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
    `;

    todos.innerHTML += html;
};

//Super important si de retinut !!!

const filterTodos = (term) => {
    Array.from(todos.children)
        .filter((todo) => {
            return !todo.textContent.toLowerCase().includes(term);
        })
        .forEach((todo) => todo.classList.add('filtered'));
        Array.from(todos.children)
        .filter((todo) => {
            return todo.textContent.toLowerCase().includes(term);
        })
        .forEach((todo) => todo.classList.remove('filtered'));
}


addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    console.log(todo);
    if(todo.length) {
        generateTemplate(todo);
        addForm.reset();
    }
    
})

todos.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
} )

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
})