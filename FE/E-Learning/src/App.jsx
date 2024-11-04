import Header from '@components/Header/Header';
import { SideBarProvider } from '@/Context/SideBarProvider';
import SideBar from '@components/SideBar/SideBar';
import { ToastProvider } from '@/Context/ToastProvider';
import BodyLayout from '@components/Layout/Layout';
import NavBar from '@components/NavBar/NavBar';
import Footer from '@components/Footer/Footer';
import Content from '@components/Content/Content';
import BlankPage from '@components/BlankPage/BlankPage';
import { StoreProvider } from '@/Context/storeProvider';

function App() {
    return (
        <>
            <StoreProvider>
                <ToastProvider>
                    <SideBarProvider>
                        <Header />
                        <SideBar />
                        <BodyLayout>
                            <NavBar />
                            <Content>
                                <BlankPage />
                            </Content>
                        </BodyLayout>
                        <Footer />
                    </SideBarProvider>
                </ToastProvider>
            </StoreProvider>
        </>
    );
}

export default App;
