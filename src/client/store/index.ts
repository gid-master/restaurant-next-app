import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './ducks/rootReducer';
import { UserState } from './ducks/user/state';
import { SettingsState } from './ducks/settings/state';
import { ProductState } from './ducks/product/state';
import { AccountState } from './ducks/account/state';
import { CheckoutState } from './ducks/checkout/state';

export interface ApplicationState {
    user: UserState;
    settings: SettingsState;
    product: ProductState;
    account: AccountState;
    checkout: CheckoutState;
}

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(thunk));

export default store;
