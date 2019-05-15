import React from 'react'
import background from '../IconBackground/Img/backgroundd.svg'
import './Background.css'

class HomeBackground extends React.Component{
    render(){
        return(
            <div className ="home">
                <img alt="background" src={background} className="background"></img>
            </div>
        
        )
    }
}

export default HomeBackground;