import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Workflow } from '../models/workflow';

@Injectable()
export class WorkflowService {
    private WorkflowsUrl = 'api/workflows'; // URL to web api

    constructor(private http: Http) { }

    getWorkflows(): Promise<Workflow[]> {
        return this.http.get(this.WorkflowsUrl)
            .toPromise()
            .then(response => response.json().data as Workflow[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getWorkflow(id: number): Promise<Workflow> {
        const url = `${this.WorkflowsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Workflow)
            .catch(this.handleError);
    };

    private headers = new Headers({'Content-Type': 'application/json'});

    update(workflow: Workflow): Promise<Workflow> {
        const url = `${this.WorkflowsUrl}/${workflow.id}`;
        return this.http
            .put(url, JSON.stringify(workflow), {headers: this.headers})
            .toPromise()
            .then(() => workflow)
            .catch(this.handleError);
    }

    create(): Promise<Workflow> {
        return this.http
            .post(this.WorkflowsUrl, {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Workflow)
            .catch(this.handleError)
    }

    delete(id: number): Promise<void> {
        const url = `${this.WorkflowsUrl}/${id}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}