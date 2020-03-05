import axios from 'axios';

export class ApiService {
    private path = "http://localhost:5000";

    public getAllProjects = async () => {
        const result = await axios.get(`${this.path}/project`);
        return result.data;
    }

    public deleteProject = async (id: any) => {
        const result = await axios.delete(`${this.path}/project/${id}`);
        return result.data;
    }

    public editProject = async (id, body) => {
        const result = await axios.patch(`${this.path}/project/${id}`, body);
        return result.data;
    }
}