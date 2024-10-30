import styles from './styles.module.scss';

function Footer() {
    const { wrapper, des } = styles;
    return (
        <div className={wrapper}>
            <div className={des}>
                <h4>**SYSTEM-E**</h4>
                <span>
                    Trang web học online hiện đại, cung cấp các khóa học chất
                    lượng và linh hoạt cho mọi lứa tuổi. Khám phá kiến thức mới,
                    mở rộng kỹ năng và phát triển bản thân cùng SYSTEM-E.
                </span>
            </div>
        </div>
    );
}

export default Footer;
