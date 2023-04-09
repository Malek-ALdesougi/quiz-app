import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';

//redux
import { Provider } from 'react-redux';

//Store
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

