import { Output, EventEmitter,Component,Input, OnInit, SimpleChanges } from '@angular/core';
import { Employee } from '../models/employee';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent{
  @Output() addUserEvent = new EventEmitter<Employee>();
  @Output() editUserEvent = new EventEmitter<Employee>();

@Input() mode: string;
@Input() employee:any;
firstName :string;
lastName :string;
email:string;
ngOnChanges(changes: SimpleChanges) {

  if(this.employee){
    this.firstName = this.employee.firstName;
    this.lastName = this.employee.lastName;
    this.email = this.employee.emailId;
   }

}

setValue() {
  let emp ={"id":this.employee?.id ? this.employee.id: 0,"firstName":this.firstName,"lastName":this.lastName,"emailId":this.email}
  if(this.mode == 'detail')
  this.editUserEvent.emit(emp);
  this.addUserEvent.emit(emp);
  this.firstName = "";
  this.lastName ="";
  this.email ="";
  }
}
