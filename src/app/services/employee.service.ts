import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employee } from '../components/employee';

const baseurl ='https://localhost:44307';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  constructor(private http: HttpClient) { }
  
  getAll():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${baseurl}/Api/Employee`);
  }

  create(data: Employee):Observable<Employee>{    
    return this.http.post<Employee>(`${baseurl}/Api/Employee`, data);
  }

  get(id: number):Observable<Employee>{    
    return this.http.get<Employee>(`${baseurl}/Api/Employee/${id}`);
  }

  edit(id: number):Observable<any>{   
    return this.get(id);
  }

  update(data : Employee):Observable<Employee>{  
    return this.http.put<Employee>(`${baseurl}/Api/Employee`, data);
  }

  delete(id : number):Observable<void>{  
    return this.http.delete<void>(`${baseurl}/Api/Employee/${id}`);
  }

}
