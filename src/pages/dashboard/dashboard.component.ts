import { Component, OnInit, Renderer } from '@angular/core';
import { Router }                      from '@angular/router';
import { Http, Response }              from '@angular/http';

import { Workflow }                    from '../../models/workflow';
import { WorkflowService }             from '../../services/workflow.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
	workflows: Workflow[]; // workflow array

	constructor(
		private router: Router,
		private workflowService: WorkflowService,
		private http: Http,
		private _renderer: Renderer
	) { }

	goToDetail(workflow: Workflow): void {
		this.router.navigate(['/edit', workflow.id]);
	}
	getWorkflows(): void {
		this.workflowService.getWorkflows().then(workflows => this.workflows = workflows);
	}
	ngOnInit(): void {
		this.getWorkflows();
	}

	add(): void {
		this.workflowService.create()
			.then(workflow => {
				this.goToDetail(workflow);
			});
	}
	toggle(workflow: Workflow): void {
		workflow.active = !workflow.active;
		this.workflowService.update(workflow);
	}
	delete(workflow: Workflow): void {
		if (confirm('Are you sure you want to delete this?')) {
			this.workflowService
				.delete(workflow.id)
				.then(() => {
					this.workflows = this.workflows.filter(h => h !== workflow);
				});
		}
	}
	sync(workflow: Workflow, event: any): void {
		var icon = event.target;
		this._renderer.setElementClass(icon, 'fa-spin', true);

		var data = '?' +
			encodeURIComponent('jira_connection[username]') + '=' + encodeURIComponent('edibouazza') +
			'&' + encodeURIComponent('jira_connection[password]') + '=' + encodeURIComponent('Y%0YH\'F?\'Fh1{cXU8[') +
			'&' + encodeURIComponent('jira_connection[site]') + '=' + encodeURIComponent('diffagency.atlassian.net') +
			'&' + encodeURIComponent('smartsheet_connection[bearer_token]') + '=' + encodeURIComponent('1xkmmm7go8z5u5hwkrez8u05i7');

		this.http.get('https://api.smartconnector.io/jira/sync' + data)
			.toPromise()
			.then((response) => {
				console.log(response);
				this._renderer.setElementClass(icon, 'fa-spin', false);
				this._renderer.setElementClass(icon, 'fa-refresh', false);
				this._renderer.setElementClass(icon, 'fa-check', true);
				setTimeout(() => {
					this._renderer.setElementClass(icon, 'fa-check', false);
					this._renderer.setElementClass(icon, 'fa-refresh', true);
				}, 2000);
			}, (response) => {
				console.error(response);
				this._renderer.setElementClass(icon, 'fa-spin', false);
				this._renderer.setElementClass(icon, 'fa-ban', true);
				this._renderer.setElementClass(icon, 'fa-refresh', false);
				setTimeout(() => {
					this._renderer.setElementClass(icon, 'fa-ban', false);
					this._renderer.setElementClass(icon, 'fa-refresh', true);
				}, 2000);
			});
	}
}
