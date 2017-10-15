//React
import React from 'react';
//React-Navigation
import { DrawerNavigator, TabNavigator, StackNavigator } from 'react-navigation';
import { Text, View } from 'react-native';
import Button from '../components/common/Button';
//Containers
import HomeScreen from '../containers/HomeScreen';
import TripsScreen from "../containers/TripsScreen";
import DrawerContainer from '../containers/DrawerContainer'

const homeScreenStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
        initialRouteName: 'HomeScreen',
        headerMode: 'screen',
        headerTitle: 'Verne',
        drawerLabel: 'Home Screen',
        headerStyle: {
            backgroundColor: '#FFC312',
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
            paddingRight: 60
        },
        headerLeft: <Button icon={"bars"} 
            size={25} 
            color={"#FFFFFF"}
            onPress={ () => { navigation.navigate('DrawerOpen') }}
            style={{paddingLeft: 15,  }} />,
    }),
  }
);

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
        name: 'HomeScreenStack123',
        screen: homeScreenStack,
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#FFC312',
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
                paddingRight: 60
            }
        }),
    },
    Tabs: {
        name: 'SecondScreenStack',
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
                paddingRight: 60
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
}, {
  gesturesEnabled: false,
  contentComponent: DrawerContainer
})

const styles = {
};

export default Navigation;