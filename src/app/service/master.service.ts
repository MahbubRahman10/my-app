import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../model/interface/master';

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
}
