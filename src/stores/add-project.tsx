import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { ProjectStore } from './store-project'

interface ProjectAddProps {
  projectStore?: ProjectStore;
}

@inject('projectStore')
@observer
export class ProjectAdd extends Component <ProjectAddProps> {

  handleAddProject = (event) => {
    this.props.projectStore.addProject()
    event.target.disabled = true;
  }

  render() {
    return (
      <div>
        <button onClick = {this.handleAddProject}>Add</button>
      </div>
    )
  }
}