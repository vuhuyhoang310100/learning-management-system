import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import images from '@assets/images/images';
import { BiHomeCircle } from 'react-icons/bi';
import { RiUserFill } from 'react-icons/ri';
import { SiCoursera } from 'react-icons/si';
import { MdPlayLesson } from 'react-icons/md';
import { dataMenu } from '@/Admin/Components/SideBar/constant';
import SideBarItem from '@/Admin/Components/SideBar/SideBarItem';

function SideBar() {
    const cx = classNames.bind(styles);
    const handleRenderIcon = (title) => {
        switch (title) {
            case 'DashBoard':
                return <BiHomeCircle />;
            case 'User':
                return <RiUserFill />;
            case 'Course':
                return <SiCoursera />;
            case 'Lesson':
                return <MdPlayLesson />;
        }
    };
    const depthLevel = 0;
    // console.log(dataMenu);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-colum')}>
                <div className={cx('boxLogo')}>
                    <img src={images.logo} alt='' />
                </div>
                <nav className={cx('main-nav')}>
                    <ul className={cx('menus')}>
                        {dataMenu.slice(0, 1).map((menu, index) => {
                            return (
                                <SideBarItem
                                    items={menu}
                                    key={index}
                                    depthLevel={depthLevel}
                                />
                            );
                        })}
                        <li className={cx('feature')}>
                            <span>features</span>
                        </li>
                        {dataMenu.slice(1).map((menu, index) => {
                            return (
                                <SideBarItem
                                    items={menu}
                                    key={index}
                                    depthLevel={depthLevel}
                                />
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default SideBar;
