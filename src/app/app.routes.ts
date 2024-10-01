import { Routes } from '@angular/router';

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
				path: 'dashboard'
				component: DashboardComponent
			},
			{
				path: 'employee'
				component: EmployeeComponent
			},
			{
				path: 'projects'
				component: EmployeeComponent
			},
			{
				path: 'dashboard'
				component: EmployeeComponent
			}
		]
	}
];
	
