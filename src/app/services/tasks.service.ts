import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { BoardModel } from '../models/board-model';
import { TaskModel } from '../models/task-model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TasksService {
  // Resolve HTTP using the constructor
  constructor(private http: Http) { }
  // private instance variable to hold base url
  private baseUrl = 'http://localhost:3001/';
  private boardUrl = 'http://localhost:3001/boards/';
  private taskUrl = 'http://localhost:3001/tasks/';

  getBoard(boardid: string): Observable<BoardModel> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('id', boardid);

    return this.http.get(this.boardUrl, { search: params })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error) || 'Server Error');
  }

  getTasks(boardid: string): Observable<TaskModel[]> {
    var url = this.boardUrl + boardid + '/tasks';
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error) || 'Server Error');
  }

  updateTask(id: string, targetlist: string): Observable<TaskModel> {
    var url = this.taskUrl + id;
    console.log(url);
    return this.http.patch(url, { "list": targetlist })
      .map((res: Response) => res.json)
      .catch((error: any) => Observable.throw(error.json().error) || 'Server Error');
  }

  createTask(boardid:string, list: string, name: string, dueDate: string, priority: string): Observable<TaskModel>{
    console.log('post');
    var url = this.boardUrl + boardid + '/tasks';
    var taskobj = {
      "list": list,
      "name": name,
      "dueDate": dueDate,
      "priority": priority
    }
    console.log(taskobj);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(url, JSON.stringify(taskobj), options)
    .map((res: Response) => console.log(res.json))
    .catch((error: any) => Observable.throw(error.json().error) || 'Server Error');
  }
}


