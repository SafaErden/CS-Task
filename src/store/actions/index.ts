import api from '../../api';
import { Dispatch } from 'redux';
import { IListItem } from './interfaces';

export enum SHIPMENT_ACTION_TYPES {
    FETCH_SHIPMENTS = '[Shipment] Fetch Shipment',
    SAVE_SHIPMENTS = '[Shipment] Save Shipment',
    SAVE_ERROR = '[Shipment] Save Error',
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

export type ShipmentActions = IFetchShipmentAction | ISaveShipmentAction | ISaveErrorAction;
