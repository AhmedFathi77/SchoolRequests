import {combineReducers} from 'redux';
import {getRequestsSchoolsReducer} from './requested-schools-reducer'

export const rootReducer = combineReducers({
    getRequestsSchoolsReducer,
});

type rootReducer = typeof rootReducer;

type returnTypeInferrer<T> = T extends (state: any, action: any) => infer U
  ? U
  : never;
type rootState = returnTypeInferrer<rootReducer>;
export interface IRootReducerState extends rootState {}

const persistedReducer = rootReducer;

export default persistedReducer;
