import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import SubSideBar from '@/Admin/Components/SideBar/SubSideBar';
import { useEffect, useRef, useState } from 'react';
function SideBarItem({ items, depthLevel }) {
    const cx = classNames.bind(styles);
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();
    useEffect(() => {
        const handler = (event) => {
            if (
                dropdown &&
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                setDropdown(false);
            }
        };
        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [dropdown]);
    return (
        <li className={cx('menu-items')} ref={ref}>
            {items.submenu ? (
                <>
                    <button
                        type='button'
                        aria-haspopup='menu'
                        aria-expanded={dropdown ? 'true' : 'false'}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}{' '}
                        {depthLevel > 0 ? (
                            <span>&raquo;</span>
                        ) : (
                            <span className={cx('arrow')}></span>
                        )}
                    </button>
                    <SubSideBar
                        submenus={items.submenu}
                        dropdown={dropdown}
                        depthLevel={depthLevel}
                    />
                </>
            ) : (
                <a href={items.href} className={cx('container')}>
                    <div className={cx('boxIcon')}>Blank</div>
                    <span>{items.title}</span>
                </a>
            )}
        </li>
    );
}

export default SideBarItem;
