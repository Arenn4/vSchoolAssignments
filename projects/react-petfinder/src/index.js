import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider} from 'react-redux'
import App from './App';
import store from './redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>,
document.getElementById('root'));

