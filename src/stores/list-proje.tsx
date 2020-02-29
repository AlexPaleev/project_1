import React from 'react'
import { observer, inject } from 'mobx-react'
import { ProjectStore, Project } from './store-project'
import { ProjectListItem } from './list-item-project'
import '../App.css';


interface ProjectListProps {
  projectStore?: ProjectStore
}

const ProjectListComponent = ({ projectStore: { projectList } }: ProjectListProps) => (
  <>
  <table>
    <caption>Projects</caption>
    <thead>
      <tr>
        <td>ID</td><td>Title</td><td>Description</td>
      </tr>
    </thead>
    <tbody>
    {projectList.map((project, idx) => (
      <ProjectListItem key={idx} project={project} />
    ))}
    </tbody>
    </table>
  </>
)

export const ProjectList = inject('projectStore')(observer(ProjectListComponent))