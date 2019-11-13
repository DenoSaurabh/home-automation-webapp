import React from 'react';

import './usdistance.styles.scss'

const USdistance = ({distance}) => (
    <div className='usdistance'>
        <h3>{distance}cm</h3>
    </div>
);

export default USdistance;