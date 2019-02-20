import React, { Component } from 'react';
import './FaceReco.css';


class FaceReco extends Component{
    render(){
        const {url,box}=this.props;
    return(
        <div>
            <img id='image' src={url} alt='urlImage' width='500px' height='auto'></img>
            <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
    );
    }
}

export default FaceReco;