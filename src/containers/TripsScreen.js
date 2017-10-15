//React
import React, {Component} from 'react';
import { View, Text } from 'react-native';
//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import * as TripActions from '../actions/TripActions';
//Components
//import Trips from '../components/trips/Trips';

class TripsScreen extends Component {
    /*constructor(props, context) {
        super(props, context);

        this.navigateToTrip = this.navigateToTrip.bind(this);
    }

    navigateToTrip({ tripId }) {
        this.props.actions.fetchTrip({ tripId });
        this.props.navigation.navigate('Trip');
    }*/

    render() {
        //const { trips } = this.props;

        return (
            //<Trips trips={ trips } navigateToTrip={ this.navigateToTrip }/>
            <View>
                <Text>Test</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    console.log(state.trips);
    return {
        trips: state.trips.currentMonthTrips,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TripActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripsScreen)