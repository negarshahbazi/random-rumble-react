import React from 'react';
import { FaHeart } from "react-icons/fa";

function ProgressBar(props) {
    return (
        <div className="progress md-progress h-50 m-1 rounded-pill border shadow-lg">
            <div className="progress-bar"
                style={{ width: (props.pv * 100 / props.pvMax) + "%" }}
                aria-valuenow={props.pv}
                aria-valuemin="0"
                aria-valuemax={props.pvMax}
                role="progressbar">
                <i className={`fas ${props.faType} ${props.bgType} icon-text`}>{props.pv} {props.barName}</i>
            </div>
            <FaHeart style={{ color: 'red', fontSize: '2rem'  }}/>
        </div>
    );
}

export default ProgressBar;
