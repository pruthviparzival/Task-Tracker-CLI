# Task Tracker CLI

This is a simple command-line interface (CLI) task management application built with Node.js. It allows you to add, list, mark, update, and delete tasks.
This project fulfills the requirements of a basic Task Tracker CLI challenge on roadmap.sh by providing essential task management functionalities through command-line interactions.

## Features

* Reads and writes task data to **Tasks.json**.
* Provides functions for adding, updating, marking, deleting, and listing tasks.
* Uses **process.argv** to handle command-line arguments and execute the corresponding functions.
* Uses the **readline** module to handle user input.

* **Add Task:** Add a new task with a description.
* **List Tasks:** View all tasks or filter by status (todo, in-progress, done).
* **Mark Task:** Update the status of an existing task to "in-progress" or "done".
* **Update Task:** Modify the description of an existing task.
* **Delete Task:** Remove a task from the list.

## Prerequisites

* **Node.js** (version 14 or higher recommended) and **npm** (Node Package Manager) installed on your system.

## Installation

1.  **Clone the repository** (if you have the code in a repository):
    ```bash
    git clone <https://github.com/pruthviparzival/Task-Tracker-CLI>
    cd <https://github.com/pruthviparzival/Task-Tracker-CLI>
    ```

2.  **Navigate to the project directory** (if you downloaded the code directly).

## Usage

Open your terminal or command prompt and navigate to the project directory. You can then use the following commands:

* **`add <task_description>`:** Adds a new task.
    ```bash
    node index.js add "Buy groceries"
    node index.js add "Finish coding challenge"
    ```

* **`list [status]`:** Lists all tasks. Optionally, you can specify a status to filter the list.
    * List all tasks:
        ```bash
        node index.js list
        ```
    * List tasks with "todo" status:
        ```bash
        node index.js list todo
        ```
    * List tasks with "in-progress" status:
        ```bash
        node index.js list "in-progress"
        ```
    * List tasks with "done" status:
        ```bash
        node index.js list done
        ```

* **`mark <new_status> <task_id>`:** Updates the status of a task. The `<new_status>` can be either `in-progress` or `done`. The `<task_id>` is the unique ID of the task you want to mark.
    ```bash
    node index.js mark "in-progress" 1
    node index.js mark done 2
    ```

* **`update <task_id> <new_description>`:** Updates the description of an existing task.
    ```bash
    node index.js update 1 "Buy fresh groceries"
    ```

* **`delete <task_id>`:** Deletes a task with the specified ID.
    ```bash
    node index.js delete 3
    ```
