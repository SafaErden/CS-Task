import React from 'react';
import { useParams } from 'react-router-dom';
import { IListItem, IBid } from '../store/actions/interfaces';
import { useSelector, useDispatch } from 'react-redux';
import { IShipmentState } from '../store/reducers/bidReducer';
import Bid from '../components/bid'
import PlaceBid from '../components/placeBid'

const ShipmentDetail = () => {
    const { list, loading } = useSelector((state: {bidReducer: IShipmentState}) => state.bidReducer);

    const params = useParams<{id: string}>();

    const info = list.find(item => item.id === params.id)
    const bids = info.bids.data.map((bid: IBid) => <Bid bid = {bid} key = {bid.id}/>)
    return(
        <>
            <div className="card">
                <div className='card-header bg-white'>
                    <div className='row'>
                        {info.category} - {info.subcategory} - {info.animal_breed}
                    </div>
                </div>               
                <div className='card-body'>
                    <h5 className="card-title">{info.title}</h5>
                        <p className='text-secondary'>{info.about}</p>
                        <p className='blockquote mb-0 bio_wrap'>{info.delivery.city} - {info.delivery.address}</p>
                    </div>
                <div className="card-footer">
                    <small className="text-muted">Distance: {info.mileage}</small>
                </div>
            </div>
            <PlaceBid />
            <div>
                {bids}
            </div>
        </>
)};

export default ShipmentDetail;