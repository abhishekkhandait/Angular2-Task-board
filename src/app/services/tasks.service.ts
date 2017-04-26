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

  updateTask(id: string, sourcelist: string, targetlist: string): Observable<TaskModel> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('id', id);
    params.set('list', sourcelist);
    var url = this.boardUrl + id + '/tasks?boardId=' + id + '&list=' + sourcelist;
    console.log(url);
    return this.http.patch(url, { "list": targetlist }, { search: params })
      .map((res: Response) => res.json)
      .catch((error: any) => Observable.throw(error.json().error) || 'Server Error');
  }
}


