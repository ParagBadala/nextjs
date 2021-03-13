import { BrushOutlined, DashboardOutlined, DesktopWindowsOutlined, FilterNone, SettingsOutlined } from "@material-ui/icons";
import { blue } from '@material-ui/core/colors';

export const NavigationItemList = [
    {
        id: '1',
        icon: <BrushOutlined style={{ color: blue[500] }}/>,
        name: 'Appearance',
        route: 'appearance'
    },
    {
        id: '2',
        icon: <DashboardOutlined style={{ color: blue[500] }} />,
        name: 'Page Layout',
        route: 'page-layout'
    },
    {
        id: '3',
        icon: <DesktopWindowsOutlined style={{ color: blue[500] }}/>,
        name: 'Change Template',
        route: 'change-template'
    },
    {
        id: '4',
        icon: <FilterNone style={{ color: blue[500] }}/>,
        name: 'Screen',
        route: 'Screen'
    },
    {
        id: '5',
        icon: <SettingsOutlined style={{ color: blue[500] }}/>,
        name: 'Settings',
        route: 'settings'
    }
];
