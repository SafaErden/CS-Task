import React from 'react';
import { IBid } from '../store/actions/interfaces';

const PlaceBid = () => {
    
    return(
    <div className="row">
        <div className="col">
            <div className="input-group my-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                </div>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                <div className="input-group-append">
                    <span className="input-group-text">.00</span>
                </div>
            </div>
        </div>
        <div className="col-auto d-flex align-items-center">
            <button type="button" className="btn btn-primary"> Place Bid </button>
        </div>
    </div>
)};

export default PlaceBid;