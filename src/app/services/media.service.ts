import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaService {


  constructor(private http: Http) { }

getAllMedia() {

  return this.http.get('http://media.mw.metropolia.fi/wbma/media')
  .map((res: Response) => res.json()
  );

}


}
