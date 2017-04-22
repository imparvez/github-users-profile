// Reducer are only even called when there is an action.

// State argument is not application state, only the state this reducer is responsible for

export default function(state = null, action){
	switch(action.type){
	case 'USER_SELECTED':
		console.log('Action PayLoad: ', action.payload);
		return action.payload;
	}

	return state;
}