import React, {useEffect}  from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { IBid } from '../store/actions/interfaces';
import { fetchShipments, deleteBid } from '../store/actions';
import { useSelector } from 'react-redux';
import { IShipmentState } from '../store/reducers/bidReducer';
import Bid from '../components/bid';
import PlaceBid from '../components/placeBid';
import { IShipmentDetailProps } from './container';

const ShipmentDetail: React.FC<IShipmentDetailProps> = ({id}) => {
    const { list,  myBids } = useSelector((state: {bidReducer: IShipmentState}) => state.bidReducer);
    const params = useParams<{id: string}>();
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(list !== null && list.length === 0){
            dispatch(fetchShipments());
        }   
    }, []);
   
    const info = list.find(item => item.id === params.id);
    if(!info) {
        return null;
    }
    const bids = info.bids.data.map((bid: IBid) => <Bid bid = {bid} key = {bid.id}/>)

    const handleDelete = () => {
        dispatch(deleteBid(params.id));
    }

    const myBid = myBids.map((bid: {
		shipmentId: string,
		amount: number
	}) => {
        if(bid.shipmentId === params.id){
            return(
                <div className='card-body py-3 comment-line-height border border-success mt-1'>
                    <div className='row'>
                        <div className='col-2 text-primary'>
                            $ {bid.amount}
                        </div>
                        <div className='col p-0 text-dark'>
                            Placed
                        </div>
                        <div>
                        <div className='col-auto'>
                            <button type="button" className="btn btn-dark" onClick={handleDelete}>Delete </button>
                        </div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return null;
        }
    });

    let filtered = myBid.filter((bid) => {
        return bid != null;
      });
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
                <PlaceBid isDisabled={filtered.length > 0}/>
            <div>
                {myBid}
                {bids}
            </div>
        </>
)};

export default ShipmentDetail;