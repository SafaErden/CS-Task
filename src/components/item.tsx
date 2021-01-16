import React from 'react';
import { IListItem } from '../store/actions/interfaces';
import { NavLink } from 'react-router-dom';

const Item = ({info}: {info: IListItem}) => (
    <NavLink to={`/ShipmentDetail/${info.id}`}>
        <div className="card">
            <div className='card-header bg-white'>
                <div className='row'>
                    title
                </div>
            </div>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className='card-body'>
            <h5 className="card-title">Card title</h5>
                <p className='blockquote mb-0 bio_wrap'>{info.id}</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
    </NavLink>
);

export default Item;