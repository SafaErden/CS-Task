import { ShipmentActions, SHIPMENT_ACTION_TYPES } from '../actions';

export interface IShipmentState {
	readonly list: any[];
	readonly error: string;
	readonly loading: boolean;
}

export const initialState: IShipmentState = {
	list: [],
    error: "",
    loading: false
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
		default:
			return state;
	}
};