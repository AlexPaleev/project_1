import { types, unprotect } from "mobx-state-tree";
import { ApiService } from '../service/api-service';
import { ProjectItem } from '../models/project';
import '../App.css';

const service: ApiService = new ApiService;
let targetId = 0;

export const ProjectList = types.model({
    projects: types.array(ProjectItem),
    isVisidle: types.optional(types.boolean, false)
})
.actions(self => ({
    async getProjects(event) {
        event.stopPropagation();
        const result = await service.getAllProjects();
        self.projects = result;
    },

    async deleteProject(event, id) {
        event.stopPropagation();
        const result = await service.deleteProject(id);
        self.projects = result;
    },

    showForm(event, id) {
        event.stopPropagation();
        targetId = id;
        let form = document.getElementById("edit-form");
        form.className = "displayBlock";
    },

    async editProject(event, inputTitle, inputDescription) {
        event.preventDefaul();
        let data = {
            title: inputTitle,
            description: inputDescription,
            pm_: 5
        }
        let result = await service.editProject(targetId, data);
        self.projects = result;
        let form = document.getElementById("edit-form");
        form.className = "hiddenBlock";
    }
}))

export const list = ProjectList.create({
});

export const model = ProjectItem.create({
    id: 0,
    title: "",
    description: ""
});

unprotect(list);