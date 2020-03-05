import React from 'react'
import { observer, PropTypes } from 'mobx-react'
import { Button } from '../../shares/button'
import { ProjectList } from '../../stores/project'
import { list } from '../../stores/project'
import '../../App.css'

export const Project = observer(props => (
    <tr>
        <td>{props.projects.id}</td><td>{props.projects.title}</td><td>{props.projects.description}</td>
        <td><Button title = "Edit" onClick = { event => {list.showForm( event, props.projects.id )}}/><span className = 'hidenId'>{props.projects.id}</span></td>
        <td><Button title = "Delete" onClick = { event => {list.deleteProject( event, props.project.id)}} /></td>
    </tr>
));