import styles from './styles.module.scss';
import { Wrapper as PopperWrapper } from '@components/Popper/Popper';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import axios from 'axios';
import { FiSearch } from 'react-icons/fi';
import { LiaSpinnerSolid } from 'react-icons/lia';
import { IoIosClose } from 'react-icons/io';
import { useDebounce } from '@/Hooks';
import { useEffect, useRef, useState } from 'react';
import SearchItem from '@components/Search/SearchItem/SearchItem';

function Search() {
    const { search, clear, loadingCl, searchBtn, searchResultCl, searchTitle } =
        styles;
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        axios
            .get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
                params: {
                    q: debounced,
                    type: 'less'
                }
            })
            // .then((res) => res.json())
            .then((res) => {
                // console.log(res);
                setSearchResult(res.data.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <>
            <Tippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={searchResultCl} tabIndex='-1' {...attrs}>
                        <PopperWrapper>
                            <h4 className={searchTitle}>Account</h4>
                            {searchResult.map((result) => (
                                <SearchItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={search}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder='Tìm kiếm khóa học, video, ...'
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />

                    {!!searchValue && !loading && (
                        <button className={clear} onClick={handleClear}>
                            <IoIosClose />
                        </button>
                    )}

                    {loading && <LiaSpinnerSolid className={loadingCl} />}
                    <button className={searchBtn}>
                        <FiSearch />
                    </button>
                </div>
            </Tippy>
        </>
    );
}

export default Search;
