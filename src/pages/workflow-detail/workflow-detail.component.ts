import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Workflow }        from '../../models/workflow';
import { WorkflowService } from '../../services/workflow.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'workflow-detail',
    templateUrl: 'workflow-detail.component.html'
})
export class WorkflowDetailComponent implements OnInit {
    @Input() workflow: Workflow;

    syncTypes = ['Two-way sync', 'JIRA to Smartsheet', 'Smartsheet to JIRA'];

    step = 1;

    constructor(
        private workflowService: WorkflowService,
        private route: ActivatedRoute,
        private location: Location
    ) {};

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.workflowService.getWorkflow(+params['id']))
            .subscribe(workflow => this.workflow = workflow);
    }
    goTo(step: number) {
        this.step = step;
    }
    goBack(): void {
        if (this.step > 1)
            this.step--;
        else
            this.location.back();
    }
    next(): void {
        this.step++;
    }
    save(): void {
        this.workflowService.update(this.workflow);
    }
	toggle(workflow: Workflow): void {
		workflow.active = !workflow.active;
		this.save();
	}
    onSubmit() { this.step++; }
}