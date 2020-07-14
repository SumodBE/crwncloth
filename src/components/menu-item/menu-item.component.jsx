import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, id, size }) => (
    <div className={`menu-item ${size}`}>
        <div className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP</span>
        </div>
    </div>

);

export default MenuItem;