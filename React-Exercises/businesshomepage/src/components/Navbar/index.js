import React, {Fragment} from 'react'
import './styles.css'

const Navbar = (props) =>{
  return (
        <nav className='topNav'>
          <div className='menubar'>
            {props.status ?
            <Fragment>
              <button onClick={props.changeDisplay}className='hambutt'>
                <div className='hamMenu'></div>
                <div className='hamMenu'></div>
                <div className='hamMenu'></div>
              </button>
            </Fragment>
            :
            <Fragment>
              <div className='sideMenu'>
                <ul >
                  <a  className='menuOptions'href=""><span>See What We're Doing</span></a>
                  <a  className='menuOptions'href=""><span>All About The Brews</span></a>
                  <a  className='menuOptions'href=""><span>Blank</span></a>
                  <a  className='menuOptions'href=""><span>Send Us A Note</span></a> 
                </ul>
              </div>
            </Fragment>
            }
          </div>

        </nav>
    )
  }
  
  export default Navbar;

<ul >
  <a  className='menuOptions'href=""><span>See What We're Doing |</span></a>
  <a  className='menuOptions'href=""><span>All About The Brews |</span></a>
  <a  className='menuOptions'href=""><span>Blank |</span></a>
  <a  className='menuOptions'href=""><span>Send Us A Note</span></a> 
</ul>