import styles from './styles.module.scss';

function CenterLayout({ children }) {
    const { wrapper, container } = styles;
    return (
        <div className={wrapper}>
            <div className={container}>{children}</div>
        </div>
    );
}

export default CenterLayout;
