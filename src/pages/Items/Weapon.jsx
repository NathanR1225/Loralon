import React, {useState, useEffect} from 'react'

export function Weapon (props) {

    useEffect( ()=>{
        console.log(props)        
    },[])

    return (
        <div>
            <div style = {{backgroundImage: "linear-gradient(#e1ad6d, #ffec9e, #e1ad6d)"}}>
                {props.info.name}
            </div>
            <div style ={{backgroundColor: "#ffdd8a"}}>
                <div>
                Damage: {props.info.damage} {props.info.damageType}
                </div>
                <div>
                Proficiency Requirements: {props.info.proficiencyRequirements}
                </div>
                <div>
                properties: {props.info.properties}
                </div>

                <div style ={{backgroundColor: "#ffec9e", margin: " 20px 8% 20px 8%", borderRadius:"5px", padding: "20px"}}>
                    {props.info.description}
                </div>
            </div>
        </div>
    )
}