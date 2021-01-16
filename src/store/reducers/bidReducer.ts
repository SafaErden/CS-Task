import { ShipmentActions, SHIPMENT_ACTION_TYPES } from '../actions';

export interface IShipmentState {
	readonly list: any[];
	readonly error: string;
	readonly loading: boolean;
	readonly myBids: {
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

export const bidReducer = (state: IShipmentState = initialState, action: ShipmentActions): IShipmentState => {
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
			};
		case SHIPMENT_ACTION_TYPES.UPDATE_BID:
			return {
				...state,
			};
		default:
			return state;
	}
};