import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../service/master.service';
import { IApiResponse, IChildDept, IParentDept } from '../model/interface/master';
import { FormsModule } from '@angular/forms';
import { Employee } from '../model/class/Employee';
import { error } from 'console';


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  isFormVisiable = signal<boolean>(false);
  masterSrv = inject(MasterService);
  parentDeptList = signal<IParentDept[]>([]);
  employeeList = signal<Employee[]>([]);
  childDeptList = signal<IChildDept[]>([]);
  parentDeptId: number = 0;
  employeeObj: Employee = new Employee();

  ngOnInit(): void {
    this.getParentDept();
    this.getEmployees();
  }
  getParentDept(){
    this.masterSrv.getAlldept().subscribe((res:IApiResponse) =>{
      this.parentDeptList.set(res.data);
    })
  }
  onParentDeptChange(){
    this.masterSrv.getChildDeptById(this.parentDeptId).subscribe((res:IApiResponse)=>{
      this.childDeptList.set(res.data);
    })
  }

  onSave(){
    debugger;
    this.masterSrv.saveEmp(this.employeeObj).subscribe((res:IApiResponse)=>{
      debugger;
      alert("Employee Created");
    }, error=>{

    })
  }

  getEmployees(){
    this.masterSrv.getAllEmp().subscribe((res:Employee[]) =>{
      this.employeeList.set(res);
    })
  }

}
