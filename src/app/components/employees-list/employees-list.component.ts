import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees : Employee[];
  constructor(private employeeService : EmployeeService, private router : Router) {
    this.employees = [];
   }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe(
      data => {
        this.employees = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  } 

  editEmployee(id: any): void{    
    this.router.navigate(['/edit-employee', id]);
  }

  deleteEmployee(id: any):void{
    this.employeeService.delete(id).subscribe(data =>{
      this.ngOnInit();
      this.router.navigateByUrl('employees');      
    })
  }
}
