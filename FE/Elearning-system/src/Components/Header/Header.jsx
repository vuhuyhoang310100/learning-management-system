import images from '@assets/images/images';

function Header() {
    return (
        <div>
            <img src={images.logo} alt='Logo' />
        </div>
    );
}

export default Header;
