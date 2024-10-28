import styles from './styles.module.scss';

function Wrapper({ children }) {
    const { wrapper } = styles;
    return <div className={wrapper}>{children}</div>;
}

export default Wrapper;
