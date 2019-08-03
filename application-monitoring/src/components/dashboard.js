import React, { Component } from 'react';
import ConsumptionUsage from '../Presentational/consumptionUsage';
import '../App.css';
import Axios from 'axios';

class ChatWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData:{},
            usageData:{},
            showUsage:false
        };

    }

    componentDidMount() {
        //get profile data
        Axios.get(`/user?id=${this.props.user}`).then((profileData) => {
            this.setState({ profileData: profileData });
        }).catch(err => {
            console.log(err);
        });

    }

    fetchUsageData = ()=>{
        // Axios.get(`/usage?id=${this.props.user}`).then((usageData) => {
        //     this.setState({ usageData: usageData });
        // }).catch(err => {
        //     console.log(err);
        // });
        let usageData = [{
            equipmentId:"1",
            equipmentName:'AC',
            currentConsumption:'2',
            maxConsumptionDetails:'5'
        },
            {
                equipmentId: "2",
                equipmentName: 'Refrigerator',
                currentConsumption: '3',
                maxConsumptionDetails: '5'
            }];
        this.setState({
            usageData:usageData, showUsage:true
        });
    }

    render() {
        let profileData = {
            id: 1234,
            plantName: 'Honeywell',
            maxConsumptionLimit: '10',
            currentConsumption: '12'
        }
        let exceededFlag = false;
        if(parseInt(profileData.currentConsumption) > parseInt(profileData.currentConsumption)){
            exceededFlag = true;
        }
        return (
            <div>
                <div className='row app-welcome'>
                    <div className='offset-sm-3 col-sm-6 offset-sm-3 text-center'>Welcome {this.props.user}</div>
                </div>
                <div className='row'>
                    <div className='offset-sm-3 col-sm-6 offset-sm-3'>
                        <div className='app-messages'>
                            <div>Plant Name: <span>{profileData.plantName}</span></div>
                            <div>Current Consumption: <span>{profileData.currentConsumption}</span></div>
                            {exceededFlag ? <div>You have exceeded your consumption limit.</div> : ''}

                            {!this.state.showUsage ? <a onClick={this.fetchUsageData}>Click to see your usage data</a>:
                            <ConsumptionUsage equipments={this.state.usageData} />}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatWindow;