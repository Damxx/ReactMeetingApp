import { INC_C, DEC_C } from "./testConstant";

const initalState = {
    data:42
}
const testReducer = (state = initalState,action) => {
    switch(action.type){
        case INC_C:
            return {...state,data:state.data+1};
        case DEC_C:
            return {...state,data:state.data-1};
        default:
            return state;
    }
   
}

export default testReducer;