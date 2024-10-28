import images from '@assets/images/images';
import styles from './styles.module.scss';
import { useContext } from 'react';
import { SideBarContext } from '@/Context/SideBarProvider';
import Button from '@components/Button/Button';
import CenterLayout from '@components/Layout/Layout';
import Search from '@components/Search/Search';

function Header() {
    const { container, headerLogo, boxButton, boxSearch } = styles;
    const { setIsOpen, setType } = useContext(SideBarContext);

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };

    return (
        <div>
            <CenterLayout>
                <div className={container}>
                    <div className={headerLogo}>
                        <img src={images.logo} alt='' />
                    </div>
                    <Search />
                    <div className={boxButton}>
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
                    </div>
                </div>
            </CenterLayout>
        </div>
    );
}

export default Header;
