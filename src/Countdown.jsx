import React from "react";

const Countdown = (props) => (

        <div className="countdown">
            <strong>{props.name}</strong> - {props.time}
        </div>
        // <div className="countdown">
        //     <strong>obiad</strong> - 15:00
        // </div>
    
);

export default Countdown;