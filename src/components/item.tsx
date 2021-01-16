import React from 'react';
import { IListItem } from '../store/actions/interfaces';

const item = ({info}: {info: IListItem}) => (
    <>
        {info.id}
    </>
);

export default item;