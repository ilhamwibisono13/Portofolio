import React from 'react'
import HomeBackground from './IconBackground/HomeBackground';
import HomeText from './IconBackground/HomeText';
import './Page.css'
import './Home.css'

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          person: {
            name: 'Ilham Wibisono',
            biography: '20 year old College Student / Developer living in Sleman. Originally from Kediri. Like to do nothing.'          
        },
          image: 'https://scontent-sin2-2.cdninstagram.com/vp/6d6431820bf3c2de689cc2471fce5256/5D607CCF/t51.2885-15/e35/46078282_366897850750002_8080850812763351995_n.jpg?_nc_ht=scontent-sin2-2.cdninstagram.com&_nc_cat=106',
          quote: {
            content: " There's nothing wrong with being a loser, it just depends on how good you are at it.",
            source: 'Billie Joe Armstrong'
          }
          
        };
      }
      render() {
        return(
          <div className="Home">
            <Image src={this.state.image} />
            <Profile person={this.state.person} quote={this.state.quote} />
          </div>
        );
      }
    }
    
    function Image(props){
        return (
          <div className="Image" style={{backgroundImage: 'url(' + props.src + ')'}}></div>
        ); 
    }
    function Profile(props){
      return (
          <div className="Profile">
            <h1 className="Name">{props.person.name}</h1>
            <p className="Bio">{props.person.biography}</p>
            <div className="Quote">
              <blockquote>&ldquo; {props.quote.content} &rdquo;</blockquote>
              <div className="byline">&mdash; {props.quote.source}</div>
            </div>
            
          </div>
        );
    }

export default Home;