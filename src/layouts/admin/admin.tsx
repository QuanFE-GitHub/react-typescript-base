import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Divider, Layout, Menu, Space, Switch } from 'antd';
import type { MenuProps, MenuTheme } from 'antd/es/menu';
import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  path?: string
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    path,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Navigation One', '1', <MailOutlined />, undefined, '1'),
  getItem('Navigation Two', '2', <CalendarOutlined />, undefined, '2'),
  getItem(
    'Navigation Two',
    'sub1',
    <AppstoreOutlined />,
    [
      getItem('Option 3', '3', undefined, undefined, '3'),
      getItem('Option 4', '4', undefined, undefined, '4'),
      getItem(
        'Submenu',
        'sub1-2',
        null,
        [
          getItem('Option 5', '5', undefined, undefined, '5'),
          getItem('Option 6', '6', undefined, undefined, '6'),
        ],
        'sub1-2'
      ),
    ],
    'sub1'
  ),

  getItem('Option 7', '7', undefined, undefined, '7'),
];

const AdminLayout = (props: any) => {
  const [mode, setMode] = useState<'vertical' | 'inline'>('inline');
  const [theme, setTheme] = useState<MenuTheme>('light');
  const [current, setCurrent] = useState<string>('1');
  const [openKey, setOpenKey] = useState<string[]>([]);

  const navigate = useNavigate();
  const location = useLocation();

  const changeMode = (value: boolean) => {
    setMode(value ? 'vertical' : 'inline');
  };

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const onClick = (e: any) => {
    const path = e.keyPath.reverse().join('/');
    navigate(`/admin/${path}`);
    setCurrent(e.key);
    if (e.keyPath.length >= 2) {
      setOpenKey(e.keyPath.slice(0, -1));
      return;
    } else {
      setOpenKey(['']);
    }
  };
  // useEffect(() => {
  //   navigate('/admin/1');
  // }, []);

  useEffect(() => {
    const pathname = location.pathname.split('/');
    const key = pathname.slice(-1)[0];
    const open = pathname.slice(2, -1);

    setCurrent(key);
    if (open.length > 0) {
      setOpenKey(open);
    } else {
      setOpenKey(['']);
    }
  }, []);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    console.log('onChange', keys);
    setOpenKey(keys);
  };

  return (
    <>
      <Space>
        <div>
          <Divider type='vertical' />
          <Switch onChange={changeTheme} /> Change Style
          <br />
          <br />
          {/* {openKey.length >= 0 && ( */}
          <Menu
            style={{ width: 256 }}
            // defaultOpenKeys={openKey}
            openKeys={openKey}
            selectedKeys={[current]}
            mode={mode}
            theme={theme}
            items={items}
            onClick={onClick}
            onOpenChange={onOpenChange}
          />
          {/* )} */}
        </div>
        <Layout style={{ width: 556 }}>
          <Outlet />
        </Layout>
      </Space>
    </>
  );
};

export default AdminLayout;
