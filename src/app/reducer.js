import { combineReducers } from "redux";

import { reducer as indexReducer } from '../pages/index/';
import { reducer as listReducer } from '../pages/list/';
import { reducer as detailReducer} from "../pages/detail/"

export default combineReducers({
	index : indexReducer,
	list : listReducer,
	detail : detailReducer
})
