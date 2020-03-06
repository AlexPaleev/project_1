import React from 'react'
import { observer } from 'mobx-react'
import '../App.css'

export const Button = observer(props => (<button onClick = {props.onClick}>{props.title}</button>));