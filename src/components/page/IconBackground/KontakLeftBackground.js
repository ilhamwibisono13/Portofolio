import React from 'react'
import background from '../IconBackground/Img/leftkontak.svg'
import './Background.css'

class KontakLeftBackground extends React.Component{
    render(){
        return(
            <div className ="kontakleft">
                <img alt="backgroundkontakleft" src={background} className="backgroundkontakleft"></img>
            </div>
        
        )
    }
}

export default KontakLeftBackground;