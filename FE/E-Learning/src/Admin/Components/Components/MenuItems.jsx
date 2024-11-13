import Dropdown from '@/Admin/Components/Components/Dropdown';
import { useEffect, useRef, useState } from 'react';
function MenuItems({ items, depthLevel }) {
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
        <li className='menu-items' ref={ref}>
            {items.submenu ? (
                <>
                    {' '}
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
                            <span className='arrow'></span>
                        )}
                    </button>
                    <Dropdown
                        submenus={items.submenu}
                        dropdown={dropdown}
                        depthLevel={depthLevel}
                    />
                </>
            ) : (
                <a href='#'>{items.title}</a>
            )}
        </li>
    );
}

export default MenuItems;
