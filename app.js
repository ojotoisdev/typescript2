var TodoManager = /** @class */ (function () {
    function TodoManager() {
        this.todos = [];
        this.nextId = 1;
    }
    TodoManager.prototype.addTodo = function (task, dueDate) {
        var newTodo = { id: this.nextId++, task: task, completed: false, dueDate: dueDate };
        this.todos.push(newTodo);
        console.log("Added: \"".concat(task, "\" (Due: ").concat(dueDate.toDateString(), ")"));
    };
    TodoManager.prototype.completeTodo = function (id) {
        var todo = this.todos.find(function (t) { return t.id === id; });
        if (todo) {
            todo.completed = true;
            console.log("Completed: \"".concat(todo.task, "\""));
        }
        else {
            console.error("Todo with ID ".concat(id, " not found."));
        }
    };
    TodoManager.prototype.removeTodo = function (id) {
        var index = this.todos.findIndex(function (t) { return t.id === id; });
        if (index !== -1) {
            console.log("Removed: \"".concat(this.todos[index].task, "\""));
            this.todos.splice(index, 1);
        }
        else {
            console.error("Todo with ID ".concat(id, " not found."));
        }
    };
    TodoManager.prototype.listTodos = function () {
        return this.todos;
    };
    TodoManager.prototype.filterTodos = function (completed) {
        return this.todos.filter(function (t) { return t.completed === completed; });
    };
    TodoManager.prototype.updateTodo = function (id, newTask) {
        var todo = this.todos.find(function (t) { return t.id === id; });
        if (todo) {
            console.log("Updated task \"".concat(todo.task, "\" to \"").concat(newTask, "\""));
            todo.task = newTask;
        }
        else {
            console.error("Todo with ID ".concat(id, " not found."));
        }
    };
    TodoManager.prototype.clearCompleted = function () {
        this.todos = this.todos.filter(function (t) { return !t.completed; });
        console.log("Cleared all completed todos.");
    };
    return TodoManager;
}());
(function () {
    var myGoal = new TodoManager();
    myGoal.addTodo("Learn TypeScript", new Date("2027-08-01"));
    myGoal.addTodo("Write a blog post", new Date("2027-10-05"));
    console.log(myGoal.listTodos());
    myGoal.completeTodo(1);
    console.log(myGoal.filterTodos(true));
    myGoal.updateTodo(2, "Write a detailed blog post");
    myGoal.removeTodo(1);
    myGoal.clearCompleted();
    console.log(myGoal.listTodos());
})();
