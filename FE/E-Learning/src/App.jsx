import { SideBarProvider } from '@/Context/SideBarProvider';
import { ToastProvider } from '@/Context/ToastProvider';
import { StoreProvider } from '@/Context/storeProvider';
import { publicRoutes } from '@/router';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLayout from '@/Layout/HomeLayout';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <StoreProvider>
                <ToastProvider>
                    <SideBarProvider>
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Page = route.component;

                                let Layout = HomeLayout;

                                if (route.layout) {
                                    Layout = route.layout;
                                } else if (route.layout === null) {
                                    Layout = Fragment;
                                }
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </SideBarProvider>
                </ToastProvider>
            </StoreProvider>
        </Router>
    );
}

export default App;
