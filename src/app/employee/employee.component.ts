import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../service/master.service';
import { IApiResponse, IParentDept } from '../model/interface/master';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  isFormVisiable = signal<boolean>(false);

  masterSrv = inject(MasterService);
  
  parentDeptList = signal<IParentDept[]>([])

  ngOnInit(): void {
    this.getParentDept();
  }

  getParentDept(){
    this.masterSrv.getAlldept().subscribe((res:IApiResponse) =>{
      this.parentDeptList.set(res.data);
    })
  }
}
