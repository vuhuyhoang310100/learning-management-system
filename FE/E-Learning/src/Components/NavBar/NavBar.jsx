import styles from './styles.module.scss';
import { TiHome } from 'react-icons/ti';
import { FaRoad } from 'react-icons/fa6';
import { MdLibraryBooks } from 'react-icons/md';

function NavBar() {
    const { wrapper, container, btnItem, iconHome } = styles;
    return (
        <div className={wrapper}>
            <div className={container}>
                <ul>
                    <li>
                        <a className={btnItem}>
                            <TiHome className={iconHome} />
                            <span>Trang chủ</span>
                        </a>
                    </li>
                    <li>
                        <a className={btnItem}>
                            <FaRoad />
                            <span>Lộ trình</span>
                        </a>
                    </li>
                    <li>
                        <a className={btnItem}>
                            <MdLibraryBooks />
                            <span>Bài viết</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
