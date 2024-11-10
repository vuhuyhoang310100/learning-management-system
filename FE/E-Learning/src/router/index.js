import LoginAdmin from '@/Admin/Login/LoginAdmin';
import BlankPage from '@components/BlankPage/BlankPage';
import ItemsLayout from '@components/Layout/ItemsLayout/ItemsLayout';
import SecondLayout from '@/Layout/SecondLayout';

const publicRoutes = [
    { path: '/', component: ItemsLayout },
    { path: '/blank', component: BlankPage },
    { path: '/item', component: ItemsLayout, layout: SecondLayout },
    { path: '/staff', component: LoginAdmin, layout: null }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
