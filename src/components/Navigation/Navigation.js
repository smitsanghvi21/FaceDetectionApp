import React, { Component } from 'react';

const Navigation=({onRouteChange})=>{
    //const{onRouteChange}=this.props;
    return(
        <div>
            <nav style={{align :'right'}}>
            <a onClick={onRouteChange} href="">signout</a>
            </nav>
        </div>
    );
}

export default Navigation;