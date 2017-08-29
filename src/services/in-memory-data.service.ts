import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let workflows = [
            {
                id: 1,
                name: 'Two Way Sync Project',
                syncType: 'Two-way sync',
                active: true,
                lastSync: 1497050536,
                interval: '5 mins'
            },
            {
                id: 2,
                name: 'Jira to Smartsheet Project',
                syncType: 'JIRA to Smartsheet',
                active: true,
                lastSync: 1497050536,
                interval: 'manual'
            },
            {
                id: 3,
                name: 'Smartsheet to Jira Project',
                syncType: 'Smartsheet to JIRA',
                active: false
            }
        ];
        return { workflows };
    }
}
