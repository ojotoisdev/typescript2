# typescript2

## TodoManager

TodoManager is a simple TypeScript class for managing a to-do list. It allows users to add, update, complete, and remove tasks, as well as filter and clear completed tasks.

##  Features
- Add new tasks with a **due date**
- Mark tasks as **completed**
- Remove tasks from the list
- Update task descriptions
- Filter tasks based on completion status
- Clear all completed tasks

##  Installation
To use this project, ensure you have **Node.js** and **TypeScript** installed.

1. **Clone this repository:**
   ```sh
   git clone https://github.com/your-username/TodoManager.git
   cd TodoManager


2. Install dependencies:


  - npm install

3. Run TypeScript code:

npx ts-node main.ts

🛠 Usage
## Create a To-Do List Manager

  - create an instance of TodoManager:

  - const myTodo = new TodoManager();

## Add New Tasks

  - myTodo.addTodo("Learn TypeScript", new Date("2027-08-01"));
  - myTodo.addTodo("Write a blog post", new Date("2027-10-05"));
## List All Tasks

  - console.log(myTodo.listTodos());

## Mark a Task as Completed

  - myTodo.completeTodo(1); 

## Update a Task

myTodo.updateTodo(2, "Write a detailed blog post");


## Remove a Task

  - myTodo.removeTodo(1);

## Filter Completed or Incomplete Tasks

  - console.log(myTodo.filterTodos(true));  // Show completed tasks
  - console.log(myTodo.filterTodos(false)); // Show pending tasks
## Clear Completed Tasks

  - myTodo.clearCompleted();

## Project Structure

 * TodoManager
 📜 TodoManager.ts  # Contains the TodoManager class
 📜 aap.ts         # Example usage of the class
 📜 README.md       # Documentation (this file)

📌 Notes

  - This project uses TypeScript.
  - You can modify and extend it as needed.






