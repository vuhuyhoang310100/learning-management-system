import SideBarItem from '@/Admin/Components/SideBarItem/SideBarItem';
import classNames from 'classnames/bind';
import styles from './../SideBar/styles.module.scss';

function SubSideBar({ submenus, dropdown, depthLevel }) {
    const cx = classNames.bind(styles);
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';
    const menuClass = `dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`;
    return (
        <ul className={cx(`${menuClass}`)}>
            {submenus.map((submenu, index) => (
                <SideBarItem
                    items={submenu}
                    key={index}
                    depthLevel={depthLevel}
                />
            ))}
        </ul>
    );
}

export default SubSideBar;
