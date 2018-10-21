import { Observable } from 'rxjs';
import { Task } from './../models/task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task = new Task();
  tasks: Task[];
  constructor(private http: HttpClient) { }
  private readonly base = 'http://localhost:8000/';

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.base);
  }
  getTask(_id: string): Observable<Task> {
    return this.http.get<Task>(this.base + _id);
  }
  createTask(task: Task) {
    return this.http.post<Task>(this.base, task);
  }
  updateTask(_id: string, task: Task): Observable<Task> {
    return this.http.put<Task>(this.base + _id, task);
  }
  removeTask(_id: string): Observable<Task> {
    return this.http.delete<Task>(this.base + _id);
  }
}
