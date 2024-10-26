import Header from '@components/Header/Header';
import { SideBarProvider } from '@/Context/SideBarProvider';
import SideBar from '@components/SideBar/SideBar';
import { ToastProvider } from '@/Context/ToastProvider';

function App() {
    return (
        <>
            <ToastProvider>
                <SideBarProvider>
                    <Header />
                    <SideBar />
                </SideBarProvider>
            </ToastProvider>
        </>
    );
}

export default App;
