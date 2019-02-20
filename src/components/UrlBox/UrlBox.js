import React, { Component } from 'react';
import './UrlBox.css';


class UrlBox extends Component{
    /*constructor(){
        super();
            this.state={
                url:''
        }
    }

    onInputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    onInputSubmit=(e)=>{
        e.preventDefault();

    }
*/
    render(){
        const {onInputChange,onInputSubmit}=this.props;
    return(
        <div>
        <p className='f3'>
          {'This Magic Brain will detect faces in your pictures. Git it a try.'}
        </p>
        <div className='center'>
          <div className='form center pa4 br3 shadow-5'>
            <input  onChange={onInputChange} name="url" className='f4 pa2 w-70 center' type='tex'/>
            <button onClick={onInputSubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' >Detect</button>
          </div>
        </div>
      </div>
    );
    }
}

export default UrlBox;