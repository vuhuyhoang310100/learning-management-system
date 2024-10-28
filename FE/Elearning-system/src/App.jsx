import Header from '@components/Header/Header';
import { SideBarProvider } from '@/Context/SideBarProvider';
import SideBar from '@components/SideBar/SideBar';
import { ToastProvider } from '@/Context/ToastProvider';
import BodyLayout from '@components/Layout/Layout';
import NavBar from '@components/NavBar/NavBar';
import Footer from '@components/Footer/Footer';
import Content from '@components/Content/Content';

function App() {
    return (
        <>
            <ToastProvider>
                <SideBarProvider>
                    <Header />
                    <SideBar />
                    <BodyLayout>
                        <NavBar />
                        <Content />
                    </BodyLayout>
                    <Footer />
                </SideBarProvider>
            </ToastProvider>
        </>
    );
}

export default App;
