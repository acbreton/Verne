//React
import React from 'react';
//React-Navigation
import { DrawerNavigator, TabNavigator } from 'react-navigation';
import { Text, View, Button } from 'react-native';
//import Button from '../components/common/Button';
//Containers
import HomeScreen from '../containers/HomeScreen';
import TripsScreen from "../containers/TripsScreen";



const goBack = () => {
    const {navigate} = this.props.navigation;
    navigate('Home');
}

const TabsNavigation = TabNavigator({
    Trips: {screen: TripsScreen}
},
{
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#ECAC00',
        inactiveTintColor: '#F7DB91',
        labelStyle: {
            fontSize: 16,
            fontFamily: 'Gotham Bold'
        },
        style: {
            backgroundColor: '#002663',
        }
    }
});

const Navigation = DrawerNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
          headerRight: <Button title="Press Me" onPress={() => navigation.navigate('SignIn') } />
        }),
    },
    Tabs: {
        screen: TabsNavigation,
        navigationOptions: {
            title: "Test Tabs",
            headerStyle: {
                backgroundColor: '#002663',
                elevation: 0,       //remove shadow on Android
                shadowOpacity: 0,   //remove shadow on iOS
            },
            headerTitleStyle: {
                color: '#fff',
                alignContent: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                fontSize: 20,
                fontFamily: 'Gotham Bold',
                marginRight: 75,
                paddingVertical: 10,
            }
        }
    } 
})

const styles = {
};

export default Navigation;