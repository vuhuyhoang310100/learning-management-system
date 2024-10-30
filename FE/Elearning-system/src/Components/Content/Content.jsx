import styles from './styles.module.scss';

function Content({ children }) {
    const { wrapper } = styles;
    return <div className={wrapper}>{children}</div>;
}

export default Content;
