import React from 'react';
import { ScrollView, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//import reducers from './reducers';
import { Header } from '../common';
import LibraryList from '../LibraryList';


const Home = () => {
	return (
		<View style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<LibraryList />
			</ScrollView>
		</View>
	);
};


export default Home;