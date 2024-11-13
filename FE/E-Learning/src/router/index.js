import LoginAdmin from '@/Admin/Login/LoginAdmin';
import BlankPage from '@components/BlankPage/BlankPage';
import ItemsLayout from '@components/Layout/ItemsLayout/ItemsLayout';
import SecondLayout from '@/Layout/SecondLayout';
import StaffHome from '@/Admin/StaffHome/StaffHome';
import SideBarItem from '@/Admin/Components/SidebarItem/SideBarItem';
import SideBar from '@/Admin/Components/SideBar/SideBar';
import Header from '@/Admin/Components/Components/Header';
const publicRoutes = [
    { path: '/', component: ItemsLayout },
    { path: '/blank', component: BlankPage },
    { path: '/item', component: ItemsLayout, layout: SecondLayout },
    { path: '/staff', component: LoginAdmin, layout: null },
    { path: '/home', component: SideBar, layout: null }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
