import React, {useState, useEffect} from 'react'

export function Weapon (props) {
    const [info, setInfo] = useState([])
    const [expanded, setExpanded] = useState(false)

    useEffect( ()=>{
        // console.log(props) 
        setInfo(props.info)       
    },[])

    const formatPrice = moneyObj =>{
        console.log(moneyObj);
        const gold = moneyObj.gold !== 0 ? `${moneyObj.gold} GP `: ''
        const silver = moneyObj.silver !== 0 ? `${moneyObj.silver} SP `: ''
        const copper = moneyObj.copper !== 0 ? `${moneyObj.copper} CP `: ''
        return ` ${gold} ${silver} ${copper}`
    }

    const toggleExpanded = ()=>{
        setExpanded(!expanded)
    }

    return (
        <div style={{paddingTop:"16px"}}>
            <div className="itemHeader" onClick ={toggleExpanded}>
            <ion-icon name='chevron-forward'></ion-icon>
                {info.name}
            </div>
{ expanded? <div style ={{backgroundColor: "#ffdd8a"}}>
{typeof info.price !== 'undefined'?       <div>
<span className="boldText">Price:</span> {formatPrice(info.price)}
                </div> : ""}
                <div className="itemDetail">
                    <span className="boldText">Damage: </span> {info.damage} {info.damageType}
                </div>
                <div className="itemDetail">
                    <span className="boldText">Proficiency Requirements: </span> {info.proficiencyRequirements}
                </div>
                <div className="itemDetail">
                    <span className="boldText">Properties:</span> {info.properties}
                </div> 
                <div className="itemDetail">
                  <span className="boldText">Weapon Type: </span>{info.weaponType}
                </div>
                <div className="itemDetail">
                    <span className="boldText">Weight: </span>{info.weight}LB
                </div>

                <div style ={{backgroundColor: "#ffec9e", margin: " 20px 8% 20px 8%", borderRadius:"5px", padding: "20px"}}>
                    {info.description}
                </div>
            </div>
        :""}
        </div>
    )
}