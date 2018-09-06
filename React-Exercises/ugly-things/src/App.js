import React, { Component } from 'react';
import Display from './components/Display'
import Controls from './components/Controls'
import { connect } from 'react-redux'


class App extends Component {
  // constructor (props){
  //   super(props);

  // }
  


  render() {
    //     const displaylist = this.props.uglies.map((data, i)=>{
    //     return <Display key={data.name + i}
    //                     name={data.name}
    //                     description={data.description}
    //                     imgUrl={data.imgUrl}
    //     />
    // })
    return (
      <div >
        <Controls />
        {/* {displaylist} */}
        <Display />
      </div>
    );
  }
}

export default connect(state=>state, {}) (App);
