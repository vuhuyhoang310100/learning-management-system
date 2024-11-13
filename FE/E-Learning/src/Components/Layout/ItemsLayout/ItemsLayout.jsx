import Item from '@components/Item/Item';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
function ItemsLayout({ children }) {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-content')}>
                <div className={cx('wrapper-colom')}>
                    <div className={cx('title')}>
                        <h2>Khoá học miễn phí</h2>
                    </div>
                    <div className={cx('body')}>
                        <div className={cx('row')}>
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </div>
                    </div>
                </div>
                <div className={cx('wrapper-colom')}>
                    <div className={cx('title')}>
                        <h2>Khoá học miễn phí</h2>
                    </div>
                    <div className={cx('body')}>
                        <div className={cx('row')}>
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemsLayout;
