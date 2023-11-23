import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksService} from "./tasks.service";
import {FormsModule} from "@angular/forms";

@Component({
	selector: 'app-tasks',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './tasks.component.html',
	styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {
	private tasksService = inject(TasksService);

	public title: string = "";
	public description: string = "";
	public error: boolean = false;

	public tasks = this.tasksService.tasks.asReadonly();

	ngOnInit() {
		this.tasksService.getTasks();
	}

	addTask() {
		if (this.title === "" || this.description === "") {
			console.error("Either no title or description given");
			this.error = true;
			return;
		}

		this.tasksService.addTask({title: this.title, description: this.description});
		this.title = "";
		this.description = "";
		this.error = false;
	}

	removeTask(id: number) {
		this.tasksService.removeTask(id);
	}

	updateTask(id: number, completed: boolean) {
		this.tasksService.updateTask({id, completed});
	}
}
