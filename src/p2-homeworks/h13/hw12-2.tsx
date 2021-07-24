import React from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import { RequestApi } from './api';


export const RequestHW13 = () => {
    const onCheckBoxClick = () => RequestApi.success()

    return (
        <div>
            homeworks 13 <br/>
            <SuperButton onClick={onCheckBoxClick}>success</SuperButton>
            <SuperCheckbox onClick={onCheckBoxClick}/>
        </div>
    )
}