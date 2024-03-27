const input = document.querySelector('#exampleInputEmail1');
const div = document.querySelector('#todos');

const arr = [];
function addTodo() {
    arr.push(input.value);
    console.log(arr);
    updatetodo()


}

function updatetodo() {
    div.innerHTML = ''

    for (let i = 0; i < arr.length; i++) {
        div.innerHTML += `
        <div class="container border p-4 rounded mt-2 d-flex justify-content-between align-items-center mt-3">
            <div>
                <h1>${arr[i]}</h1>
            </div>
            <div>
                <button onclick="deleteTodo(${i})" type="button" class="btn btn-danger text-white"><i
                        class="fa-solid fa-trash text-white"></i></button>
                <button onclick="editTodo(${i})" type="button" class="btn btn-success text-white"><i
                        class="fa-solid fa-pen-to-square text-white"></i></button>
            </div>
        </div>
        `
    }
}



function deleteTodo(index) {

    arr.splice(index, 1);
    updatetodo()

}
function editTodo(index) {
    const updatedVal = prompt('enter updated value');
    arr.splice(index, 1, updatedVal);
    updatetodo()
}