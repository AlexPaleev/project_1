import React from 'react'

import { Project } from './store-project'

interface ProjectListItemProps {
  project: Project
}

export const ProjectListItem = ({ project }: ProjectListItemProps) =>
 <tr>
   <td>{project.id}</td><td>{project.title}</td><td>{project.description}</td>
</tr>