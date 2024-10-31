import styles from './styles.module.scss';

function SearchItem({ data }) {
    const { wrapper, avatarCl, info, titleName, userName } = styles;
    return (
        <div className={wrapper}>
            <img className={avatarCl} src={data.avatar} alt='' />
            <div className={info}>
                <h4 className={titleName}>{data.full_name}</h4>
                <span className={userName}>{data.nickname}</span>
            </div>
        </div>
    );
}

export default SearchItem;
