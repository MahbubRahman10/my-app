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
  onCancel(){
    this.isFormVisiable.set(false);
    this.employeeObj = new Employee();
  }
  onSave(){
    this.masterSrv.saveEmp(this.employeeObj).subscribe((res:IApiResponse)=>{
      alert("Employee Created");
      this.employeeObj = new Employee();
      this.isFormVisiable.set(false);
      this.getEmployees();
    }, error=>{

    })
  }

  getEmployees(){
    this.masterSrv.getAllEmp().subscribe((res:Employee[]) =>{
      this.employeeList.set(res.sort((a, b) => b.employeeId - a.employeeId));
    })
  }

  onEdit(data: Employee){
    this.employeeObj = data;
    this.isFormVisiable.set(true);
  }
  onUpdate(){
    this.masterSrv.updateEmp(this.employeeObj).subscribe((res:IApiResponse)=>{
      debugger;
      alert("Employee Updated");
      this.getEmployees();
      this.employeeObj = new Employee();
      this.isFormVisiable.set(false);
    }, error=>{

    })
  }
  onDelete(id: number){
    const isDelete = confirm("Are you sure want to delete");
    if(isDelete){
      this.masterSrv.deleteEmp(id).subscribe((res:IApiResponse)=>{
        debugger;
        alert("Employee Deleted");
        this.getEmployees();
        this.employeeObj = new Employee();
        this.isFormVisiable.set(false);
      }, error=>{
  
      })
    }
  }


}
function orderBy(res: Employee[], arg1: string[], arg2: string[]) {
  throw new Error('Function not implemented.');
}

