import React, {useState, useEffect} from 'react'
import {Weapon} from './Weapon'
const itemsJson = require('../../data/items.json')

export function ItemsPage (props) {
    const [items, setItems] = useState([])
    const [weapons, setWeapons] = useState([])


    useEffect( ()=>{
        console.log(itemsJson)   
        processWeapons(itemsJson.weapons)     
    },[])

    const processWeapons =  weaponArray =>{
        for (let i = 0; i < weaponArray.length; i++) {
            const current = weapons
            current.push(<Weapon info = {weaponArray[i]}/>)
            setWeapons(current)
        }
    }

    return (
        <div>
            {weapons}
        </div>
    )
}