import { actionType } from "./actionType";
const defaultValue = {
	list : []
}

export default ( state = defaultValue, action ) => {
	if( action.type === actionType ){
		return {
			list : action.value
		}
	}
	return state;
}
