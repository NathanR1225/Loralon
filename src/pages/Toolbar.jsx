import React from 'react'
import { useHistory } from 'react-router-dom'

export function Toolbar (props) {
    const history = useHistory()

    const goToHome = () => {
        history.push('/')
      }

    const goToItems = () => {
        history.push('/items')
      }

    const goToMaps = () => {
        history.push('/maps')
      }

    return (
        <div className = "toolbar">
            <div onClick = {goToHome} className = "toolbarItem">
                Home
            </div>
            <div onClick = {goToItems} className = "toolbarItem">
                Items
            </div>
            <div onClick = {goToMaps} className = "toolbarItem"> 
                Maps
            </div>
        </div>
    )
}