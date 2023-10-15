import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{
  constructor(private route: ActivatedRoute,private employeeService :EmployeeService) { }
  employee$ :Observable<Employee>;
ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.employee$=this.employeeService.getEmployee(params['id'])
  });
}
onEdit(event:Employee){
this.employee$=this.employeeService.updateEmployee(event)
}


}
