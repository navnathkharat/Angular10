import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
//   employee = {
//     firstname:'', lastname:'', contact: '', age : 0
//  };

  employee = new Employee();
  empId : any;

  constructor(private employeeservice : EmployeeService, private router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(parameterMap => {
        const id = Number(parameterMap.get('id'));
        this.employeeservice.get(id);
        this.getEmployee(id);
    });
  }

  getEmployee(id: any){
    if(id == 0){
      this.employeeservice.create(this.employee).subscribe(response => {
        console.log(response);
        this.router.navigateByUrl('employees');
      },
      error=>{
        console.log(error);      
      })
    }
    else
    {
      this.employeeservice.get(id).subscribe(response => {
        this.employee = response; 
        console.log(response);
      },
      error=>{
        console.log(error);      
      })
    }
  }

  saveEmployee(): void{
    if(this.employee.id ==0){
      this.employeeservice.create(this.employee).subscribe(response => {
        console.log(response);
        this.router.navigateByUrl('employees');
      },
      error=>{
        console.log(error);      
      })
    }
    else
    {
      this.employeeservice.update(this.employee).subscribe(response => {
        console.log(response);
        this.router.navigateByUrl('employees');
      },
      error=>{
        console.log(error);      
      })
    }
   
  }
  cancel():void{
    this.router.navigateByUrl('employees');
  }

}
