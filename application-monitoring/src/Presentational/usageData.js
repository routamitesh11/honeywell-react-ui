import React from 'react';
import '../App.css'

function UsageData(props) {
    let {usageData} = props;
    return (
        <div className='row'>
            <div className='col-sm-12'>
                <div >Name: {usageData.equipmentName}</div>
                <div >Current Consumption: {usageData.currentConsumption}</div>
            </div>
        </div>
    );
}

export default UsageData;