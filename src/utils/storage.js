export function updateTodos(todos) {
    localStorage.setItem("TODOS", JSON.stringify(todos));
}

export function loadTodos() {
    const todos = localStorage.getItem("TODOS");
    return JSON.parse(todos || "[]");
}
