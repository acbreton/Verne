import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class DrawerContainer extends React.Component {

  logout = () => {
    // This will reset back to loginStack
    // https://github.com/react-community/react-navigation/issues/1127
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null,  // black magic
      actions: [NavigationActions.navigate({ routeName: 'loginStack' })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }

  render() {
    const { navigation } = this.props

    const { container, uglyDrawerItem, menuItems, menuHeaderStyle, menuTextStyle } = styles;

    return (
      <View style={{flex: 1}}>
        <View style={menuHeaderStyle}>
          <Text style={menuTextStyle}>Menu</Text>
        </View>
        <View style={container}>
          <View style={menuItems}>
            <Text
              onPress={() => navigation.navigate('screen1')}
              style={styles.uglyDrawerItem}>
              Moods
            </Text>
            <Text
              onPress={() => navigation.navigate('screen2')}
              style={styles.uglyDrawerItem}>
              Songs
            </Text>
            <Text
              onPress={() => navigation.navigate('screen3')}
              style={styles.uglyDrawerItem}>
              Artists
            </Text>
            <Text
              onPress={this.logout}
              style={styles.uglyDrawerItem}>
              Log Out
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    paddingTop: 20,
    paddingHorizontal: 20,
    flex: 9
  },
  uglyDrawerItem: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Gotham Bold',
    color: '#000',
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: '#000',
    borderWidth: 1,
    textAlign: 'center'
  },
  menuHeaderStyle: {
    height: 60,
    backgroundColor: '#FFC312',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Gotham Bold',
    color: '#fff',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },
  menuItems: {
    flex: 6
  }
});

/*function mapStateToProps(state) {
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

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer)*/