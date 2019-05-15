import React, {Component} from 'react';
import KontakLeftBackground from './IconBackground/KontakLeftBackground';
import KontakRightBackground from './IconBackground/KontakRightBackground';
import KontakText from './IconBackground/KontakText';

class Kontak extends Component {
    render() {
        return (
            <div className="kontak">
                <div className="leftbackground">
                    <KontakLeftBackground/>
                </div>
                <div className="centertext">
                    <KontakText/>
                </div>
                <div className="rightbackground">
                    <KontakRightBackground/>
                </div>
            </div>
        );
    }
}

export default Kontak;
