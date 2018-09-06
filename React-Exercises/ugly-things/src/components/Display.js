import React from 'react';
import { connect } from 'react-redux'
import { removeUgly } from '../redux'
const Display = (props) => {

    //map through array
    
    
    return (
        <div className="">
            { props.uglies.map( ugly => {
                return (
                    <div class="row">
                        <div class="col s12 m3">
                            <div class="card">
                                <div class="card-image">
                                    <img src={ugly.imgUrl} />
                                    <span class="card-title">{ugly.name}</span>
                                </div>
                                    <div class="card-content">
                                        <p>{ugly.description}</p>
                                    </div>
                                    <div class="card-action">
                                        <a class="waves-effect waves-light btn" onClick={ () => props.removeUgly(ugly.id)}>Delete</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>        
    );
};

export default connect(state=>state, { removeUgly })(Display);



//   <div>
//                         <h1>{ugly.name}</h1>
//                         <p>{ugly.description}</p>
//                         <img src={ugly.imgUrl} />
//                         {/* <button onClick={ () => props.removeUgly(ugly.id)}>Delete</button> */}
//                         <a class="waves-effect waves-light btn" onClick={ () => props.removeUgly(ugly.id)}>Delete</a>
//                     </div>