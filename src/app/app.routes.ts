import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { ProjectEmployeeComponent } from './project-employee/project-employee.component';



export const routes: Routes = [

	{
	path: '',
	redirectTo: 'login',
	pathMatch: 'full'
	},

	{
		path: 'login',
		component: LoginComponent
	},

	{
		path: '',
		component:LayoutComponent,
		children:[
			{
				path: 'dashboard',
				component: DashboardComponent
			},
			{
				path: 'employee',
				component: EmployeeComponent
			},
			{
				path: 'projects',
				component: ProjectComponent
			},
			{
				path: 'project-employee',
				component: ProjectEmployeeComponent
			}
		]
	}
];
	
