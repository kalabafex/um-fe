import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  constructor(private employeeService: EmployeeService){}
  addUser(event: Employee){
  this.employeeService.addEmployee(event).subscribe(data => {
    console.log(data);
  });
}
  }

