import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private baseUrl="http://localhost:8080/employee"
  constructor(private httpClient: HttpClient) { }
  getEmployeeList(): Observable<Employee[]>{
  return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }
  getEmployee(id:number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
    }
  addEmployee(employee:Employee): Observable<any>  {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(employee);
    return this.httpClient.post(this.baseUrl,body,{'headers':headers});
  }
  deleteEmployee(id:number){
   return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
  updateEmployee(employee: Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.baseUrl}/${employee.id}`,employee);
  }
}
