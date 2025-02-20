import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Task } from '../entity/Task';
import { catchError, Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private http:HttpClient = inject(HttpClient);
  private apiUrl: string = "http://localhost:8080/";

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl).pipe(
      retry(1),
     catchError(error => {
      alert("An error occurred. Sorry! Try reloading the page.")
      throw error;
     }));
  } 

  getTaskById(taskId: number):Observable<Task> {
    return this.http.get<Task>(this.apiUrl + taskId).pipe(
      retry(1),
     catchError(error => {
      alert("An error occurred. Sorry! Try reloading the page")
      throw error;
     }));
  } 

  addTasks(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl + "save", task).pipe(
      retry(1),
     catchError(error => {
      alert("An error occurred. Sorry! Try reloading the page")
      throw error;
     }));
  } 

  deleteTask(task:Task):Observable<Task>{
    return this.http.delete<Task>(this.apiUrl + task.id).pipe(
      retry(1),
     catchError(error => {
      alert("An error occurred. Sorry! Try reloading the page")
      throw error;
     }));
  } 

  updateTask(oldTask:Task, newTask:Task):Observable<Task>{
    return this.http.put<Task>(this.apiUrl + oldTask.id, newTask).pipe(
      retry(1),
     catchError(error => {
      alert("An error occurred. Sorry! Try reloading the page.")
      throw error;
     }));
  } 
}
