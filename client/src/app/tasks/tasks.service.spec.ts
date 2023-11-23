import {TestBed} from '@angular/core/testing';
import {TasksService} from './tasks.service';
import {importProvidersFrom} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";

describe('TasksService', () => {
	let service: TasksService;

	beforeEach(() => {
		TestBed.configureTestingModule({providers: [importProvidersFrom(HttpClientModule)]});
		service = TestBed.inject(TasksService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
