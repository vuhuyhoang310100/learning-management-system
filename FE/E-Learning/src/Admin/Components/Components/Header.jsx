import Navbar from '@/Admin/Components/Components/Navbar';

function Header() {
    return (
        <header>
            <div className='nav-area'>
                <a href='#' className='logo'>
                    fontend
                </a>
                <Navbar />
            </div>
        </header>
    );
}

export default Header;
