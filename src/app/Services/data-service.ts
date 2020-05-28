import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    constructor (private http: HttpClient) {}

    fetchTasks() {
        return this.http.get('https://tasksmanager-302f5.firebaseio.com/Task.json');
    }

    submitTask(task) {
        return this.http.post('https://tasksmanager-302f5.firebaseio.com/Task.json', task);
    }

    removeTask(taskName) {
        return this.http.delete(`https://tasksmanager-302f5.firebaseio.com/Task/${taskName}.json`);
    }

    getTask(taskName) {
        return this.http.get(`https://tasksmanager-302f5.firebaseio.com/Task/${taskName}.json`);
    }

    updateTask(task, taskName) {
        return this.http.put(`https://tasksmanager-302f5.firebaseio.com/Task/${taskName}.json`, task);
    }

}