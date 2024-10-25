import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../model/interface/master';
import { Employee } from '../model/class/Employee';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getAlldept(): Observable<IApiResponse>{
    return this.http.get<IApiResponse>("https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment");
    
  }
  getChildDeptById(deptid:number): Observable<IApiResponse>{
    return this.http.get<IApiResponse>("https://projectapi.gerasim.in/api/EmployeeManagement/GetChildDepartmentByParentId?deptId="+deptid);
    
  }

  saveEmp(obj:Employee): Observable<IApiResponse>{
    return this.http.post<IApiResponse>("https://projectapi.gerasim.in/api/EmployeeManagement/CreateEmployee", obj);
    
  }

  getAllEmp(): Observable<Employee[]>{
    return this.http.get<Employee[]>("https://projectapi.gerasim.in/api/EmployeeManagement/GetAllEmployees");
    
  }

  updateEmp(obj:Employee): Observable<IApiResponse>{
    return this.http.put<IApiResponse>("https://projectapi.gerasim.in/api/EmployeeManagement/UpdateEmployee/" + obj.employeeId, obj);
    
  }
  deleteEmp(id: number): Observable<IApiResponse>{
    return this.http.delete<IApiResponse>("https://projectapi.gerasim.in/api/EmployeeManagement/DeleteEmployee/" +id);
    
  }

}
