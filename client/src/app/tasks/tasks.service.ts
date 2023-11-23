import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Task} from "./tasks.interfaces";

const backendUrl = "http://localhost:3000"

@Injectable({ providedIn: 'root'})
export class TasksService {
  private http = inject(HttpClient);

  public tasks = signal<Task[]>([]);

  public getTasks() {
    this.http.get(`${backendUrl}/tasks`).subscribe((response) => {
      console.log("Retrieved Tasks.");
      console.log(response);
      this.tasks.set(response as Task[]);
    });
  }

  public addTask({title, description}: {title: string, description: string}) {
    this.http.post(`${backendUrl}/tasks`, {title, description}).subscribe((response) => {
      console.log("Task added successfully.");
      console.log(response);
      this.tasks.update((tasks) => {
        tasks.push(response as Task);
        return tasks;
      })
    });
  }

  public removeTask(taskId: number) {
    this.http.delete(`${backendUrl}/tasks/${taskId}`).subscribe((response) => {
      console.log("Task deleted successfully.");
      this.tasks.update((tasks) => {
        return tasks.filter((task) => task.id !== taskId);
      })
    });
  }

  public updateTask({id, completed}: {id: number, completed: boolean}) {
    this.http.put(`${backendUrl}/tasks/${id}`, {completed}).subscribe((response) => {
      console.log("Task updated successfully.");
      console.log(response);
      this.tasks.update((tasks) => {
        return tasks.map((task) => {
          if (task.id === id) {
            return {...task, completed};
          }
          return task;
        })
      })
    });
  }
}
