import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './stores/store';
import { GlobalStyles } from './components/commons';
import { LoadingProvider } from './context/LoadingContext';
import { LoadingModalProvider } from './context/LoadingModalContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles>
          <LoadingModalProvider>
            <LoadingProvider>
              <App />
            </LoadingProvider>
          </LoadingModalProvider>
        </GlobalStyles>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
