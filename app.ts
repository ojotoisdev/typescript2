interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
  dueDate: Date;
}

class TodoManager {
  private todos: TodoItem[] = [];
  private nextId: number = 1;

  addTodo(task: string, dueDate: Date): void {
    const newTodo: TodoItem = { id: this.nextId++, task, completed: false, dueDate };
    this.todos.push(newTodo);
    console.log(`Added: "${task}" (Due: ${dueDate.toDateString()})`);
  }

  completeTodo(id: number): void {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = true;
      console.log(`Completed: "${todo.task}"`);
    } else {
      console.error(`Todo with ID ${id} not found.`);
    }
  }

  removeTodo(id: number): void {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index !== -1) {
      console.log(`Removed: "${this.todos[index].task}"`);
      this.todos.splice(index, 1);
    } else {
      console.error(`Todo with ID ${id} not found.`);
    }
  }

  listTodos(): TodoItem[] {
    return this.todos;
  }

  filterTodos(completed: boolean): TodoItem[] {
    return this.todos.filter((t) => t.completed === completed);
  }

  updateTodo(id: number, newTask: string): void {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      console.log(`Updated task "${todo.task}" to "${newTask}"`);
      todo.task = newTask;
    } else {
      console.error(`Todo with ID ${id} not found.`);
    }
  }

  clearCompleted(): void {
    this.todos = this.todos.filter((t) => !t.completed);
    console.log("Cleared all completed todos.");
  }
}


(() => {
  const myGoal = new TodoManager();
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
