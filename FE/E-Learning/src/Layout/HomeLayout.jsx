import Content from '@components/Content/Content';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import ItemsLayout from '@components/Layout/ItemsLayout/ItemsLayout';
import BodyLayout from '@components/Layout/Layout';
import NavBar from '@components/NavBar/NavBar';
import SideBar from '@components/SideBar/SideBar';

function HomeLayout({ children }) {
    return (
        <>
            <Header />
            <SideBar />
            <BodyLayout>
                <NavBar />
                <Content>{children}</Content>
            </BodyLayout>
            <Footer />
        </>
    );
}

export default HomeLayout;
