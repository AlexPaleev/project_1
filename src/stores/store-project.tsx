import { observable, action, reaction, computed } from 'mobx';
import axios from 'axios';
// import { types, Instance, SnapshotIn } from 'mobx-state-tree';

export interface Project {
  id: number,
  title: string,
  description: string
}

export class ProjectStore {
  @observable projectList: Project[] = []  

  @action
  addProject() {
    axios.get("http://localhost:5000/project")
    .then(res => {
        const project: Project [] = res.data;
        project.forEach(item => {
            this.projectList.push(item);
        })
    })    
  }  
}

export const projectStore = new ProjectStore()