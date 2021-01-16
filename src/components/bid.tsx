import React from 'react';
import { IBid } from '../store/actions/interfaces';

const Item = ({bid}: {bid: IBid}) => (
    <div className='card-body py-3 comment-line-height border border-dark mt-1'>
      <div className='row'>
        <div className='col-2 text-primary'>
            $ {bid.amount}
        </div>
        <div className='col p-0 text-dark'>
            {bid.status}
        </div>
        <div>
          <div className='col-auto'>
              .
          </div>
        </div>
      </div>
    </div>
);

export default Item;