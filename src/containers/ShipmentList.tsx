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

    const { list, loading } = useSelector((state: {bidReducer: IShipmentState}) => state.bidReducer);
    console.log(list);
    const renderList = list.map((item: IListItem) => {
       return <Item info={item} />
    })
  
    return (
      <div className="bg-primary">
        {renderList}
      </div>
    );
  }
  
  export default ShipmentList;