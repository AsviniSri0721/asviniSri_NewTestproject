import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  constructor(private http: HttpClient) { }
  users: any;
  public employees = [{eno: '001', ename: 'asvini'}, {eno: '002', ename: 'kumaru'}];
  // ngOnInit(): void {
  // }
  // tslint:disable-next-line:typedef
  ngOnInit(){
    const resp = this.http.get('http://127.0.0.1:8080/rest/v2/all');
    resp.subscribe((data) => this.users = data);
  }
}
