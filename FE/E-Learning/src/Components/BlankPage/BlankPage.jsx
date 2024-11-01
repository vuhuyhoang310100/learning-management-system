import images from '@assets/images/images';
import styles from './styles.module.scss';

function BlankPage() {
    const { wrapper, boxImg, title } = styles;

    return (
        <div className={wrapper}>
            <div className={boxImg}>
                <img src={images.blankImg} alt='Blank Page' />
            </div>
            <h4 className={title}>Dữ liệu hiện đang được cập nhật</h4>
        </div>
    );
}

export default BlankPage;
