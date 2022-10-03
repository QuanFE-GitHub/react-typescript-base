import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthLayout } from './layouts';
import { authRoutes } from './utils/routers';
import './App.less';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'auth'} />}></Route>

      <Route path='auth' element={<AuthLayout />}>
        {authRoutes.map((route, key) => {
          const Page = route.component;
          return (
            <>
              {route.index ? (
                <>
                  <Route
                    key={key}
                    index={route.index}
                    element={<Navigate to={route.path} />}
                  />
                  <Route key={key} path={route.path} element={<Page />} />
                </>
              ) : (
                <Route
                  key={key}
                  index={route.index ?? false}
                  path={route.path}
                  element={<Page />}
                />
              )}
            </>
          );
        })}
      </Route>
    </Routes>
  );
}

export default App;
