import { UniqueId, getTimeDate } from "./utils.js";

import fs from "fs";
const path = "./Tasks.json";

// to create a new json file, if one doesnt exist.
if (!fs.existsSync(path)) {
  fs.writeFileSync(path, JSON.stringify([]));
}
let Tasks = [];
try {
  Tasks = JSON.parse(fs.readFileSync(path, "utf8"));
} catch (error) {
  console.log(error);
}

export const arrID = Tasks.map((task) => {
  return task.id;
});

// functions -> add , update , mark , delete , list (todo,in-progress,done)

// addTask();
// deleteTask(id);
// updateTask(id, input);  and marking other task modes
// markTask(mode);
// ListTask();    // mode can be in-progress,done,todo or empty for all tasks.

function addTask(args) {
  const input = args[0];
  if (!input) {
    console.log("------Requires a task name to add task------");
    return;
  }
  const id = UniqueId();
  Tasks = [
    ...Tasks,
    {
      id,
      description: input,
      status: "todo",
      createdAt: getTimeDate(),
      updatedAT: null,
    },
  ];
  fs.writeFileSync(path, JSON.stringify(Tasks, null, 2));
  console.log(`Task "${input}" added successfully (ID:${id})`);
}

function updateTask(args) {
  const id = Number(args[0]);
  const input = args[1];
  if (!id || !input) {
    console.log("------Requires id, task name to update task------");
    return;
  }

  let flag = false;
  for (let x of arrID) {
    if (x === id) flag = true;
  }
  if (!flag) {
    console.log("-----Task id not found------");
    return;
  }

  // update within the same array.
  Tasks = Tasks.map((task) => {
    if (task.id === id)
      return { ...task, description: input, updatedAT: getTimeDate() };
    else return task;
  });
  fs.writeFileSync(path, JSON.stringify(Tasks, null, 2));
  console.log("Task updated successfully.");
}

function deleteTask(args) {
  const id = Number(args[0]);
  if (!id) {
    console.log("------Requires id to delete task------");
    return;
  }

  let flag = false;
  for (let x of arrID) {
    if (x === id) flag = true;
  }
  if (!flag) {
    console.log("-----Task id not found------");
    return;
  }

  Tasks = Tasks.filter((task) => {
    return task.id !== id;
  });
  fs.writeFileSync(path, JSON.stringify(Tasks, null, 2));
  console.log("Task deleted successfully.");
}

function markTask(args) {
  const id = Number(args[1]);
  const input = args[0];
  if (!id || !input) {
    console.log("------Requires id, to mark the task status------");
    return;
  }
  if (input !== "in-progress" && input !== "done") {
    console.log("------Invalid mark status------");
    return;
  }

  let flag = false;
  for (let x of arrID) {
    if (x === id) flag = true;
  }
  if (!flag) {
    console.log("-----Task id not found------");
    return;
  }

  Tasks = Tasks.map((task) => {
    if (task.id === id) return { ...task, status: input };
    else return task;
  });
  fs.writeFileSync(path, JSON.stringify(Tasks, null, 2));
  console.log("Task marked succesfully.");
}

function ListTask(args) {
  const input = args[0];
  if (!input) {
    if (Tasks.length === 0) {
      console.log("-----No Tasks Found-----");
      return;
    } else {
      for (let x of Tasks) {
        console.log(x.description);
      }
    }
  } else {
    if (input !== "in-progress" && input !== "done" && input !== "todo") {
      console.log("------Invalid list status------");
      return;
    }
    let filteredTasks = Tasks.filter((task) => {
      return task.status === input;
    });
    if (filteredTasks.length === 0) {
      console.log("-----No Tasks Found with the given status-----");
      return;
    } else {
      for (let x of filteredTasks) {
        if (x.status === input) console.log(x.description);
      }
    }
  }
}
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const [, , command, ...args] = process.argv;

switch (command) {
  case "add":
    addTask(args);
    break;

  case "list":
    ListTask(args);
    break;

  case "mark":
    markTask(args);
    break;

  case "update":
    updateTask(args);
    break;

  case "delete":
    deleteTask(args);
    break;

  default:
    console.log("Unknown command");
}

rl.close();
