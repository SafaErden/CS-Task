import { ShipmentActions, SHIPMENT_ACTION_TYPES } from '../actions';

export interface IShipmentState {
	 list: any[];
	 error: string;
	 loading: boolean;
	 myBids: {
		shipmentId: string,
		amount: number
	}[];
}

export const initialState: IShipmentState = {
	list: [],
    error: "",
	loading: false,
	myBids: []
};

export const bidReducer = (state: Readonly<IShipmentState> = initialState, action: ShipmentActions): IShipmentState => {
	console.log(action)
	switch (action.type) {
		case SHIPMENT_ACTION_TYPES.SAVE_SHIPMENTS:
			return {
				...state,
				list: action.payload.data,
			};
		case SHIPMENT_ACTION_TYPES.SAVE_ERROR:
			return {
				...state,
				error: "something went wrong",
			};
		case SHIPMENT_ACTION_TYPES.PLACE_BID:
			return {
				...state,
				myBids: [...state.myBids,{
						shipmentId: action.payload.id,
						amount: action.payload.amount
					}
				]
			};
		case SHIPMENT_ACTION_TYPES.DELETE_BID:
			return {
				...state,
				myBids: state.myBids.filter(bid => bid.shipmentId !== action.payload)
			};
		case SHIPMENT_ACTION_TYPES.UPDATE_BID:
			return {
				...state,
			};
		default:
			return state;
	}
};