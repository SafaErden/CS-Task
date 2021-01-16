import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchShipments } from '../store/actions';
import { IShipmentState } from '../store/reducers/bidReducer';
import  Item  from '../components/item';
import { IListItem } from '../store/actions/interfaces';

function ShipmentList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchShipments(dispatch));
    }, [dispatch]);

    const { list } = useSelector((state: {bidReducer: IShipmentState}) => state.bidReducer);
    
    const renderList = list.map((item: IListItem) => {
       return <Item info={item}/>
    })
  
    return (
      <div className="container">
        <div className='row'>
          <div className='col card-columns'>
            {renderList}
        </div>
        </div>
      </div>
    );
  }
  
  export default ShipmentList;