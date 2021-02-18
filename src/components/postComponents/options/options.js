import React from 'react';
import { ReactComponent as ChDown } from './../../../assets/icons/chevron-down.svg';
import { ReactComponent as ChUp } from './../../../assets/icons/chevron-up.svg';
import { ReactComponent as Delete } from './../../../assets/icons/delete.svg';

export default function ComponentOptions({ id, remove, up, down }) {
    return (<div className="comp-options">
        <div className="option-button">
            <ChUp width="20px" height="20px" onClick={() => up(id)} />
        </div>
        <div className="option-button">
            <ChDown width="20px" height="20px" onClick={() => down(id)} />
        </div>
        <div className="option-button" onClick={() => remove(id)}>
            <Delete width="20px" height="20px" />
        </div>
    </div>);
}