import React from 'react'
import background from '../IconBackground/Img/rightkontak.svg'
import './Background.css'

class KontakRightBackground extends React.Component{
    render(){
        return(
            <div className ="kontakleft">
                <img alt="backgroundkontakright" src={background} className="backgroundkontakright"></img>
            </div>
        
        )
    }
}

export default KontakRightBackground;