import api from '../../api';
import { Dispatch } from 'redux';

export enum SHIPMENT_ACTION_TYPES {
    FETCH_SHIPMENTS = '[Shipment] Fetch Shipment',
    SAVE_SHIPMENTS = '[Shipment] Save Shipment',
    SAVE_ERROR = '[Shipment] Save Error',
    PLACE_BID = '[Shipment] Place Bid',
    DELETE_BID = '[Shipment] Delete Bid',
    UPDATE_BID = '[Shipment] Update Bid',
}

export interface IFetchShipmentAction {
	type: SHIPMENT_ACTION_TYPES.FETCH_SHIPMENTS;
}

export interface ISaveShipmentAction {
    type: SHIPMENT_ACTION_TYPES.SAVE_SHIPMENTS;
    payload: any;
}

export interface ISaveErrorAction {
    type: SHIPMENT_ACTION_TYPES.SAVE_ERROR;
}

export interface IPlaceBid {
  type: SHIPMENT_ACTION_TYPES.PLACE_BID;
  payload: {id: string, amount: number};
}

export interface IDeleteBid {
    type: SHIPMENT_ACTION_TYPES.DELETE_BID;
    payload: string;
}

export interface IUpdateBid {
    type: SHIPMENT_ACTION_TYPES.UPDATE_BID;
    payload: {id: string, amount: number};
}

export const fetchShipments = (dispatch: Dispatch) => async (dispatch: Dispatch) => {
    try {
        const response = await api.get("/");
        if (response.data) {
          dispatch({ type: SHIPMENT_ACTION_TYPES.SAVE_SHIPMENTS, payload: response.data });
        }
      } catch (err) {
        dispatch({ type: SHIPMENT_ACTION_TYPES.SAVE_ERROR });
      }
};

export const placeBid = (id: string, amount: number) => {
  return {
    type: SHIPMENT_ACTION_TYPES.PLACE_BID,
    payload: {
      id, amount
    }
  }
};

export const deleteBid = (id: string) => {
  return {
    type: SHIPMENT_ACTION_TYPES.DELETE_BID,
    payload: id
  }
};

export const updateBid = (id: string, amount: number) => {
  return {
    type: SHIPMENT_ACTION_TYPES.UPDATE_BID,
    payload: {
      id, amount
    }
  }
};

export type ShipmentActions = IFetchShipmentAction | ISaveShipmentAction | ISaveErrorAction | IPlaceBid | IDeleteBid | IUpdateBid;
