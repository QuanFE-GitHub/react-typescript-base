import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthLayout } from './layouts';
import { authRoutes } from './utils/routers';
import './App.less';

import { PrivateRoutes, NotFound } from './components/commons';
import { privateRoutes } from './routes';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'auth'} />} />
      <Route path='*' element={<NotFound />} />
      <Route path='auth' element={<AuthLayout />}>
        {authRoutes.map((route, key) => {
          const Page = route.component;
          return (
            <React.Fragment key={key}>
              {route.index ? (
                <>
                  <Route index={route.index} element={<Navigate to={route.path} />} />
                  <Route path={route.path} element={<Page />} />
                </>
              ) : (
                <Route index={route.index ?? false} path={route.path} element={<Page />} />
              )}
            </React.Fragment>
          );
        })}
      </Route>

      <Route element={<PrivateRoutes />}>
        {privateRoutes.map((route, idx) => {
          const Page = route.component;
          return (
            <Route
              key={idx}
              path={route.path}
              element={
                <React.Suspense fallback={<></>}>
                  <Page />
                </React.Suspense>
              }
            />
          );
        })}
      </Route>
    </Routes>
  );
}

export default App;
