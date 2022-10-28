import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthLayout } from './layouts';
import DemoComponent from './pages/DemoComponent/DemoComponent';

import { authRoutes } from './utils/routers';

import './App.less';
import AdminLayout from './layouts/admin/admin';
import Option1 from './pages/admin/Options/Option1';
import Option2 from './pages/admin/Options/Option2';
import Option3 from './pages/admin/Options/Option3';
import Option4 from './pages/admin/Options/Option4';
import Option5 from './pages/admin/Options/Option5';
import Option6 from './pages/admin/Options/Option6';
import Option7 from './pages/admin/Options/Option7';
import Sub1 from './pages/admin/Options/Sub1';
import Sub1_2 from './pages/admin/Options/Sub1_2';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'auth'} />}></Route>
      <Route path='/modal' element={<DemoComponent />} />
      <Route path='admin' element={<AdminLayout />}>
        <Route path='1' element={<Option1 />} />
        <Route path='2' element={<Option2 />} />
        <Route path='sub1' element={<Sub1 />}>
          <Route path='3' element={<Option3 />} />
          <Route path='4' element={<Option4 />} />
          <Route path='sub1-2' element={<Sub1_2 />}>
            <Route path='5' element={<Option5 />} />
            <Route path='6' element={<Option6 />} />
          </Route>
        </Route>
        <Route path='7' element={<Option7 />} />
      </Route>

      {/* <Route path='auth' element={<AuthLayout />}>
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
      </Route> */}
    </Routes>
  );
}

export default App;
