import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { placeBid } from '../store/actions'

const PlaceBid = ({isDisabled}:{isDisabled: boolean}) => {
    const [amount, setAmount] = useState(0);
    const params = useParams<{id: string}>();
    const dispatch = useDispatch();
    const setBid = () => dispatch(placeBid(params.id, amount));
    
    return(
    <div className="row">
        <div className="col">
            <div className="input-group my-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                </div>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" value = {amount} onChange = {(e: any) => setAmount(Number(e.currentTarget.value))}/>
                <div className="input-group-append">
                    <span className="input-group-text">.00</span>
                </div>
            </div>
        </div>
        <div className="col-auto d-flex align-items-center">
            <button type="button" onClick={setBid} className="btn btn-primary" disabled={isDisabled}> Place Bid </button>
        </div>
    </div>
)};

export default PlaceBid;