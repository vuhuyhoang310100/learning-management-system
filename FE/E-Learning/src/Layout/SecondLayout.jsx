import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';

function SecondLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default SecondLayout;
