import {createStore} from 'redux'
import testReducer from '../features/testarea/testReducer'
import rootRedcuer from '../reducers/rootReducers'

export const configureStore = () => {
    const store = createStore(rootRedcuer)

    return store
}