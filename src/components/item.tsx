import React from 'react';
import { IListItem } from '../store/actions/interfaces';
import { NavLink } from 'react-router-dom';

const Item = ({info}: {info: IListItem}) => (
        <div className="card">
            <div className='card-header bg-white'>
                <div className='row'>
                    {info.category}
                </div>
            </div>
            <NavLink to={`/ShipmentDetail/${info.id}`}>                <div className='card-body'>
                <h5 className="card-title">{info.title}</h5>
                    <p className='blockquote mb-0 bio_wrap'>{info.subcategory}</p>
                </div>
            </NavLink>
            <div className="card-footer">
                <small className="text-muted">Distance: {info.mileage}</small>
            </div>
        </div>
);

export default Item;