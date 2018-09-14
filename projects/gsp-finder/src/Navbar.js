import React, { Component, Fragment }from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getZipcode } from './redux'


//add value to input to then relay to the redux file

class Navbar extends Component {
    constructor(props){
        super(props);

        this.state = {
            zip: "",
            status: true
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = e =>{
        e.preventDefault()
        const zip = {
            zip: Number(this.state.zip)
        }
        this.props.getZipcode(zip)
    }
    changeDisplay = e =>{
        this.setState(prevState =>{
          return{
          status: !prevState.status
          }
        })
      }
    //handlesubmit
    //call action, get search
    render(){
        const styles = {
            paddingLeft: "5px"
        }
        return (
            <div>
                <nav>
                    <form className="nav-wrapper" onSubmit={this.handleSubmit}>
                        <Link to='/' style={styles} className="brand-logo"> Find a Pupper</Link>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/pets'>Pets</Link></li>
                            <li><input className='Pet-Search' type='number' name='zip' value={this.state.zip} onChange={this.handleChange} placeholder='Enter ZIP Code'></input></li>
                            <li><button className="btn-small flow-text red-text text-lighten-3 blue-grey lighten-5">Search</button></li>
                        </ul>
                        <ul>
                        {this.state.status
                        ?
                           
                            <button onClick={this.changeDisplay} className='hambutt'>
                                <div className='hamMenu'></div>
                                <div className='hamMenu'></div>
                                <div className='hamMenu'></div>
                            </button>
                        
                        :
                            <div className='sideMenu' >
                                <ul onMouseLeave={this.changeDisplay}>
                                <Link className='menuOptions'to="/"><span>Home</span></Link>
                                <Link className='menuOptions'to="/about"><span>About</span></Link>
                                <Link className='menuOptions'to="/pets"><span>Pets</span></Link>
                                <li><input className='Pet-Search' type='number' name='zip' value={this.state.zip} onChange={this.handleChange} placeholder='Enter ZIP Code'></input></li>
                                <li><button className="btn-small flow-text red-text text-lighten-3 blue-grey lighten-5">Search</button></li>
                                </ul>
                            </div>
                             
                        }
                        </ul>
                    </form>
                </nav>
            </div>
        );
    }
};
export default connect(state=>state, {getZipcode})(Navbar);
            // <Fragment>
            //   <button onClick={props.changeDisplay}className='hambutt'>
            //     <div className='hamMenu'></div>
            //     <div className='hamMenu'></div>
            //     <div className='hamMenu'></div>
            //   </button>
            // </Fragment>

