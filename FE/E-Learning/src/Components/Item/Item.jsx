import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { GoClockFill } from 'react-icons/go';
import { RiVideoFill } from 'react-icons/ri';
import { MdPeopleAlt } from 'react-icons/md';
import images from '@assets/images/images';

function Item() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('col')}>
            <div className={cx('container')}>
                <a className={cx('linkImg')}>
                    <img src={images.java} alt='' />
                </a>
                <div className={cx('content')}>
                    <h3 className={cx('boxTitle')}>
                        <a href=''>Kiến thức nhập môn IT</a>
                    </h3>
                    <div className={cx('boxPrice')}>
                        <span className={cx('oldPrice')}>200.000</span>
                        <span className={cx('mainPrice')}>Miễn phí</span>
                    </div>
                    <div className={cx('boxDes')}>
                        <div className={cx('info_item')}>
                            <MdPeopleAlt />
                            <span>141.222</span>
                        </div>
                        <div className={cx('info_item')}>
                            <RiVideoFill />
                            <span>19</span>
                        </div>
                        <div className={cx('info_item')}>
                            <GoClockFill />
                            <span>10h18p</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
