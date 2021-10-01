import React, {useState, useEffect} from 'react'

export function Weapon (props) {
    const [info, setInfo] = useState([])

    useEffect( ()=>{
        console.log(props) 
        setInfo(props.info)       
    },[])

    const formatPrice = moneyObj =>{
        return ` ${moneyObj.gold} Gold ${moneyObj.silver} Silver ${moneyObj.copper} Copper`
    }

    return (
        <div>
            <div style = {{backgroundImage: "linear-gradient(#e1ad6d, #ffec9e, #e1ad6d)"}}>
                {info.name}
            </div>
            <div style ={{backgroundColor: "#ffdd8a"}}>
                <div>
                    Price: {formatPrice(info.price)}
                </div>
                <div>
                    Damage: {info.damage} {info.damageType}
                </div>
                <div>
                    Proficiency Requirements: {info.proficiencyRequirements}
                </div>
                <div>
                    Properties: {info.properties}
                </div> 
                <div>
                    Weight:{info.weight}LB
                </div>

                <div style ={{backgroundColor: "#ffec9e", margin: " 20px 8% 20px 8%", borderRadius:"5px", padding: "20px"}}>
                    {info.description}
                </div>
            </div>
        </div>
    )
}