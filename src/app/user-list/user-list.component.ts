import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit{
  employees: Employee[];
  employee: Employee;
  displayedColumns =["firstName", "lastName","emailId" ]
  constructor(private employeeService:EmployeeService){}
  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data
    });
  }
  onDelete(id :number){
    this.employeeService.deleteEmployee(id).subscribe(data => {
    });
  }
}
