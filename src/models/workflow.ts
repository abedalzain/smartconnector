export class Workflow {
    id: number;
    name: string;
    syncType: string;
    sheetId: number;
    jiraId: number;
    taskId: number;
    errorField: number;
    //fields: object;
    active: boolean;
    interval: string;
    lastSync: number;
}