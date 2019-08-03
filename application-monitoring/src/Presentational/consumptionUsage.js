import React, { useState } from 'react';
import UsageData from './usageData';
import '../App.css';
function ConsumptionUsage(props) {
    // Loop through all the equipments in the state and create a Message component
    const equipments = props.equipments.map((usageData, i) => {
        return (
            <UsageData key={`usage${i}`} usageData={usageData}></UsageData>
        );
    });
    return (
        <div id='messageList'>
            {/* {messages} Hello */}
            {equipments}
        </div>
    );
}

export default ConsumptionUsage;
