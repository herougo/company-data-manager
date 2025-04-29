import { ReactNode } from 'react';
import store from './store'
import { Provider } from 'react-redux'

export type ReduxProviderProps = {
    children?: ReactNode
};

const ReduxProvider = (props: ReduxProviderProps) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
};

export default ReduxProvider;