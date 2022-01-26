import React from 'react';
import propTypes from 'prop-types'
import { Fade } from 'react-reveal';

export default function Card(props) {
    const className = ['tiles-item']
    className.push(props.className)
    return (
        <Fade>
        <div className={className.join(" ")}>
            <div className={`tiles-item-inner ${props.hasShadow ? " has-shadow " : ""}`} >
                    {props.children}
            </div>
        </div>
        </Fade>
    );
}


Card.propTypes ={
    hasShadow: propTypes.bool,
    className: propTypes.string
}