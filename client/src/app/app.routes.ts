import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: "",
		pathMatch: "full",
		loadComponent: () => import('./tasks/tasks.component').then((component) => component.TasksComponent),
	}
];
