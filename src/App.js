import React from 'react';
import { ScrollView, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import reducers from './reducers';
import Navigation from './config/Navigation';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';
import {selectLibrary} from './actions/index'

const store = configureStore();
store.dispatch(selectLibrary(null));
//store.dispatch(fetchMonths({ startMonth: 1, endMonth: 3 }));

//createStore(reducers)

const App = () => {
	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	);
};


export default App;