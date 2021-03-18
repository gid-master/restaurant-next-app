import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import userSettings from './settings/reducer';
import productReducer from './product/reducer';
import accountReducer from './account/reducer';
import checkoutReducer from './checkout/reducer';

export default combineReducers({
    user: userReducer,
    settings: userSettings,
    product: productReducer,
    account: accountReducer,
    checkout: checkoutReducer
});
