import { makeObservable, observable, action } from "mobx";

interface TaskItem {
  id: number;
  title: string;
  completed: boolean;
  isEditing: boolean;
}

const saveTasksCookie = (taskArray: TaskItem[]) => {
  document.cookie = "data=" + JSON.stringify(taskArray);
};

export class TasksStoreImplementation {
  tasks: TaskItem[] = [];

  constructor() {
    makeObservable(this, {
      tasks: observable,
      addTask: action,
      toggleTask: action,
      toggleEditTask: action,
    });
  }

  loadTasks() {
    const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)data\s*=\s*([^;]*).*$)|^.*$/, "$1");
    if (cookieValue) {
      this.tasks = JSON.parse(cookieValue);
    }
  }

  addTask(title: string) {
    const item: TaskItem = {
      id: +Math.random().toFixed(4),
      title,
      completed: false,
      isEditing: false,
    };
    this.tasks.push(item);
    saveTasksCookie(this.tasks);
  }

  toggleTask(id: number) {
    const index = this.tasks.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.tasks[index].completed = !this.tasks[index].completed;
    }
    saveTasksCookie(this.tasks);
  }

  toggleEditTask(id: number) {
    const index = this.tasks.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.tasks[index].isEditing = !this.tasks[index].isEditing;
      this.tasks.map((task) => task.id !== id && (task.isEditing = false));
    }
    saveTasksCookie(this.tasks);
  }

  editTask(id: number, title: string) {
    const index = this.tasks.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.tasks[index].title = title;
      this.tasks[index].isEditing = false;
    }
    saveTasksCookie(this.tasks);
  }
}

export const tasksStore = new TasksStoreImplementation();
