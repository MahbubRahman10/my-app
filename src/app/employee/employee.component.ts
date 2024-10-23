import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../service/master.service';
import { IApiResponse, IParentDept } from '../model/interface/master';
import { FormsModule } from '@angular/forms';


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
  
  parentDeptList = signal<IParentDept[]>([])

  parentDept: string = '';

  ngOnInit(): void {
    this.getParentDept();
  }

  getParentDept(){
    this.masterSrv.getAlldept().subscribe((res:IApiResponse) =>{
      this.parentDeptList.set(res.data);
    })
  }
}
