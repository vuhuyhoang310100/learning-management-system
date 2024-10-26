import images from '@assets/images/images';
import { useContext } from 'react';
import { SideBarContext } from '@/Context/SideBarProvider';
import Button from '@components/Button/Button';

function Header() {
    const { setIsOpen, setType } = useContext(SideBarContext);

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };

    return (
        <div>
            <div>Logo</div>
            <div>Seacrh</div>
            <div>Brand</div>
            <div>
                <button onClick={() => handleOpenSideBar('signin')}>
                    Đăng nhập
                </button>
                <button onClick={() => handleOpenSideBar('signup')}>
                    Đăng ký
                </button>
                <Button outline>Login</Button>
            </div>
        </div>
    );
}

export default Header;
