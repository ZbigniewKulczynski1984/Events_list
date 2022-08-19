import React from "react";
import PropTypes from "prop-types";

const Countdown = (props) => (

        <div className="countdown">
            <strong>{props.name}</strong> - {props.time}
        </div>
        // <div className="countdown">
        //     <strong>obiad</strong> - 15:00
        // </div>
);

Countdown.PropTypes = {
    name: PropTypes.string,
    time: Proptypes.string
}



export default Countdown;