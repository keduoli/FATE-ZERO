import { actionType } from "./actionTypes"

const defaultState = {
	list : []
}

export default (state = defaultState, action) => {
	if(action.type === actionType){
		return {
			list : action.value
		}
	}
	return state
}


