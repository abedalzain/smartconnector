import { Component }   from '@angular/core';
import { OnInit }      from '@angular/core';
import { Router }      from '@angular/router';

import { Workflow }        from '../../models/workflow';
import { WorkflowService } from '../../services/workflow.service';

@Component({
  selector: 'my-workflows',
  templateUrl: 'workflows.component.html'
})

export class WorkflowsComponent implements OnInit {
  workflows: Workflow[]; // workflow array
  selectedWorkflow: Workflow;

  constructor(
    private router: Router,
    private workflowService: WorkflowService
  ) { }

  getWorkflows():void {
    this.workflowService.getWorkflows().then(workflows => this.workflows = workflows);
  }
  ngOnInit(): void {
    this.getWorkflows();
  }
  onSelect(workflow: Workflow): void {
    this.selectedWorkflow = workflow;
  }
  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedWorkflow.id]);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.workflowService.create()
      .then(workflow => {
        this.workflows.push(workflow);
        this.selectedWorkflow = null;
      });
  }
  delete(workflow: Workflow): void {
    this.workflowService
      .delete(workflow.id)
      .then(() => {
        this.workflows = this.workflows.filter(h => h !== workflow);
        if (this.selectedWorkflow === workflow) { this.selectedWorkflow = null; }
      });
  }
}
