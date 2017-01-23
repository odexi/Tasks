import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Injectable()
export class DigitransitService {

  constructor(private http: Http) { }

 getData(name: string){
    const url = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';
    const headers = new Headers({'Content-Type': 'application/graphql'});
    const options = new RequestOptions({headers: headers});
    let data = `{
      stops(name: "${name}") {
        patterns {
          name
        }
      }
      }`;
      return this.http.post(url, data, options).map
      (resp => resp.json());
  }
}
