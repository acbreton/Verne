import * as types from '../actions/types';
//import * as betterTrackAPI from '../utils/api/betterTrackAPI';

export const selectLibrary = (libraryId) => {
	return {
		type: 'select_library',
		payload: libraryId
	};
};

export const fetchMonths = ({ startMonth, endMonth }) => async dispatch => {
	try {
		let payload = await betterTrackAPI.fetchMonths({ startMonth, endMonth });
        console.log(payload);
        dispatch(fetchMonthsSuccess({ months: payload.data }));
	} catch(error) {
		console.log("this doesnt work, man");
		console.log(error);
	}
};

export const fetchLibrariesSuccess = ({libraries}) => {
    return { type: types.FETCH_LIBRARIES_SUCCESS, libraries }
};
