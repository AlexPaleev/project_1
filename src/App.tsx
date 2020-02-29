import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import './App.css';

import { ProjectStore } from './stores/store-project'
import { ProjectAdd } from './stores/add-project'
import { ProjectList } from './stores/list-proje'

class App extends Component {
  private projectStore: ProjectStore = new ProjectStore()

  render() {
    return (
      <Provider projectStore = {this.projectStore}>
        <div className = "projects">
          <ProjectAdd  />
          <ProjectList />
          
        </div>
      </Provider>
    )
  }
}

export default App;
