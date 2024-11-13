import images from '@assets/images/images';
import styles from './styles.module.scss';
import { useContext } from 'react';
import { SideBarContext } from '@/Context/SideBarProvider';
import Button from '@components/Button/Button';
import Search from '@components/Search/Search';
import { StoreContext } from '@/Context/storeProvider';

function Header() {
    const { container, headerLogo, boxButton, searchBox } = styles;
    const { setIsOpen, setType } = useContext(SideBarContext);
    const { userId, handleLogOut } = useContext(StoreContext);
    // console.log(userId);
    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };

    return (
        <div className={container}>
            <div className={headerLogo}>
                <img src={images.logo} alt='' />
            </div>
            <div className={searchBox}>
                <Search />
            </div>
            <div className={boxButton}>
                {!userId && (
                    <>
                        <Button
                            outline
                            onClick={() => handleOpenSideBar('signin')}
                        >
                            Đăng nhập
                        </Button>
                        <Button
                            primary
                            onClick={() => handleOpenSideBar('signup')}
                        >
                            Đăng ký
                        </Button>
                    </>
                )}
                {userId && (
                    <>
                        <div>Hello: {userId}</div>
                        <Button primary onClick={handleLogOut}>
                            Đăng xuất
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Header;
