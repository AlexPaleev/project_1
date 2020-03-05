import React from 'react'
import { observer, PropTypes } from 'mobx-react'
import { values } from "mobx";
import { ApiService } from "../../service/api-service";
import { Project } from './project-item';
import { list, model } from '../../stores/project';
import { EditForm } from './edit-form';  
import { Button } from '../../shares/button';
import '../../App.css';

export const AllProject = observer(props => (
    <div className = "projects" >
        <EditForm list = {list} model = {model}/>
        <Button title = "Project" onClick = {event => list.getProjects(event)}/>
        <table>
            <thead>
                <tr>
                    <td>ID</td><td>Title</td><td>Description</td>
                </tr>
            </thead>
            <tbody>
                {props.list.projects.map(item => (
                    <Project list = {props.list} projects = {item}/>
                ))}
            </tbody>
        </table>
    </div>
));

export class ProjectList extends React.Component {
    render() {
        return (
                <AllProject list = {list} model = {model}/>
        )
    }
}

export default ProjectList;