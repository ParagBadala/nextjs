import { BrushOutlined, DashboardOutlined, DesktopWindowsOutlined, FilterNone, SettingsOutlined } from "@material-ui/icons";

export const NavigationItemList = [
    {
        id: '1',
        icon: <BrushOutlined />,
        name: 'Appearance',
        route: 'appearance'
    },
    {
        id: '2',
        icon: <DashboardOutlined />,
        name: 'Page Layout',
        route: 'page-layout'
    },
    {
        id: '3',
        icon: <DesktopWindowsOutlined />,
        name: 'Change Template',
        route: 'change-template'
    },
    {
        id: '4',
        icon: <FilterNone />,
        name: 'Screen',
        route: 'Screen'
    },
    {
        id: '5',
        icon: <SettingsOutlined />,
        name: 'Settings',
        route: 'settings'
    }
];
