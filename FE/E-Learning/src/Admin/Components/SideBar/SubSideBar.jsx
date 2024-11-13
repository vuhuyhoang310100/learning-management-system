import SideBarItem from '@/Admin/Components/SideBar/SideBarItem';
import classNames from 'classnames';
function SubSideBar({ submenus, dropdown, depthLevel }) {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';
    return (
        <ul
            className={classNames(
                `dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`
            )}
        >
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
