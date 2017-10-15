//React
import React, {Component} from 'react';
//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
/*import * as TripsActions from '../actions/TripsActions';
import * as TravelersActions from '../actions/TravelersActions';
import * as MonthActions from '../actions/MonthActions'*/

//Components
import Home from "../components/home/Home";

class HomeScreen extends Component {
    /*constructor(props,context) {
        super(props, context);

        this.showTabsScreen = this.showTabsScreen.bind(this);
        this.loadNextMonth = this.loadNextMonth.bind(this);
        this.loadPreviousMonth = this.loadPreviousMonth.bind(this);
    }

    componentDidUpdate(prevProps){
        if(prevProps.months.months.length !== this.props.months.months.length){
            this.props.monthActions.setCurrentMonth({
                currentMonth: { ...this.props.months.months[0] },
                totalMonths: this.props.months.months.length,
            });
            const monthId = this.props.months.months[this.props.months.months.length - 1].id;
            this.props.tripsActions.fetchTrips({ monthId });
            this.props.travelersActions.fetchTravelers({ monthId });
        }
    }

    loadNextMonth(){
        let index = this.props.months.months.findIndex(x => x.id===this.props.months.currentMonth.id);
        this.props.monthActions.setCurrentMonth({
            currentMonth: { ...this.props.months.months[index + 1] },
            totalMonths: this.props.months.months.length,
        });
        const monthId = this.props.months.months[index + 1].id;
        this.props.tripsActions.fetchTrips({ monthId });
        this.props.travelersActions.fetchTravelers({ monthId });
    }

    loadPreviousMonth(){
        let index = this.props.months.months.findIndex(x => x.id===this.props.months.currentMonth.id);
        this.props.monthActions.setCurrentMonth({
            currentMonth: { ...this.props.months.months[index - 1] },
            totalMonths: this.props.months.months.length,
        });
        const monthId = this.props.months.months[index - 1].id;
        this.props.tripsActions.fetchTrips({ monthId });
        this.props.travelersActions.fetchTravelers({ monthId });
    }*/

    showTabsScreen(){
        this.props.navigation.navigate('Tabs');
    }

    render() {
        /*const { currentMonth } = this.props;

        const onPress = {
            showTabsScreen: this.showTabsScreen,
            loadNextMonth: this.loadNextMonth,
            loadPreviousMonth: this.loadPreviousMonth
        };

        const sections = [
            { top: 'Travel Time', middle: currentMonth.totalDriveTime, bottom: 'Hours' },
            { top: 'Activity', middle: currentMonth.activityCount, bottom: 'Miles' },
            { top: 'Phone Usage', middle: currentMonth.phoneUsage, bottom: 'Percent' }
        ];*/

        return (
            <Home />
        );
    }
}

function mapStateToProps(state) {
    return {
        months: null
    };
}

function mapDispatchToProps(dispatch) {
    return {
        monthActions: null,
        tripsActions: null,
        travelersActions: null
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)