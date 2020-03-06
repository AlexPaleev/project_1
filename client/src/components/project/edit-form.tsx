import React from 'react';
import { observer, PropTypes } from "mobx-react";
import { Button } from '../../shares/button';
import { list } from '../../stores/project';
import '../../App.css';



export const EditForm = observer(props => (
    <div className = 'edit-form' id = 'edit-form'>
      <form name = 'edit-project'>
         <input type = 'text' value = {props.model.title} placeholder = 'Title' onChange = { event => props.model.setTitle( event.target.value )}/>
         <input type = 'text' placeholder = 'Description' onChange = { event => props.model.setDescription( event.target.value )} />
         <Button title = "Send" onClick = { event => { props.list.editProject(event, props.model.title, props.model.description )}}/>
     </form>
   </div>
) )