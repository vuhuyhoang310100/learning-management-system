import { menuItemsData } from '@/Admin/Components/Components/menuItemsData';
import MenuItems from '@/Admin/Components/Components/MenuItems';
function Navbar() {
    const depthLevel = 0;
    return (
        <nav className='main-nav'>
            <ul className='menus'>
                {menuItemsData.map((menu, index) => {
                    return (
                        <MenuItems
                            items={menu}
                            key={index}
                            depthLevel={depthLevel}
                        />
                    );
                })}
            </ul>
        </nav>
    );
}

export default Navbar;
