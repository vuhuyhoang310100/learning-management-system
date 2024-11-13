import { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@/Context/SideBarProvider';
import classNames from 'classnames/bind';
import { IoIosClose } from 'react-icons/io';
import Login from '@components/ContentSideBar/Login/Login';
import Register from '@components/ContentSideBar/Register/Register';

function SideBar() {
    const cx = classNames.bind(styles);
    const { container, overlay, slideSideBar, boxIcon } = styles;
    const { isOpen, setIsOpen, type } = useContext(SideBarContext);

    const handleClose = () => {
        setIsOpen(!isOpen);
    };
    // console.log(type);

    const handleRenderContent = () => {
        switch (type) {
            case 'signin':
                return <Login />;
            case 'signup':
                return <Register />;
            default:
                return <Login />;
        }
    };
    return (
        <div className={container}>
            <div
                className={cx({
                    [overlay]: isOpen
                })}
                onClick={handleClose}
            ></div>
            <div
                className={cx('sideBar', {
                    [slideSideBar]: isOpen
                })}
            >
                {isOpen && (
                    <div className={boxIcon} onClick={handleClose}>
                        <IoIosClose />
                    </div>
                )}
                {handleRenderContent()}
            </div>
        </div>
    );
}

export default SideBar;
