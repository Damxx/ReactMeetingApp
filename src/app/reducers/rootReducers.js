import { combineReducers } from "redux";
import testReducer from "../features/testarea/testReducer";

const rootRedcuer = combineReducers({
  test: testReducer,
});

export default rootRedcuer;
