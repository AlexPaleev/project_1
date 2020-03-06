import { types } from 'mobx-state-tree';
import { ApiService } from '../service/api-service';

let service: ApiService = new ApiService;

export const ProjectItem = types.model({
    id: types.identifierNumber,
    title: types.string,
    description: types.string
})
.actions(self => ({
    setTitle(newTitle) {
        self.title = newTitle;
        console.log(self.title);
    },
    setDescription(newDescription) {
        if (newDescription) {
            self.description = JSON.parse(newDescription);
            console.log(self.description);
        }
    }
}))