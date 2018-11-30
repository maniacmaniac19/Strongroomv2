import React from 'react';
import './secretcard.css'
// import { Panel } from 'reactstrap';

const SecretCard = (props) => (
    <div className="card">
        {/* <Panel> */}
        <div className="card-header"><a><h4 className="panel-title">{props.name}</h4></a></div>
        <div className="card-body">

            <div class="form-group">
                <label class="col-form-label col-form-label-sm" for="inputSmall">URL:</label>
                <input class="form-control  form-control-sm"  type="text" value={props.URL}></input>
            </div>

            <div className="form-group">
                <label className="col-form-label col-form-label-sm" for="inputSmall">Username</label>
                <input className="form-control form-control-sm inputSmall "type="text" value={props.username}></input>
            </div>
            <div className="form-group pwdToggle">
                <label className="col-form-label col-form-label-sm" for="inputSmall">Password</label><br/>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i class="far fa-eye showPwd"><br/></i></span>
                        <input className="form-control form-control-sm pwd" type="password" value={props.password}></input>
        
                    </div>
                </div>
        
            </div>
            
        
        
            <div className="row">
                <div className="col-1">
                    <button className="btn btn-primary updatePwd ">Update</button>
                </div>
                <div className="col-1">
                    <button className="btn btn-primary deletePwd" >Delete</button>
                </div>
        
            </div>
        
        </div>
        {/* </Panel> */}
    </div>
);

export default SecretCard;