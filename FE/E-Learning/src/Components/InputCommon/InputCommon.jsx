import { useState } from 'react';
import styles from './styles.module.scss';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function InputCommon({ label, type, ...props }) {
    const { container, labelInput, boxInput, boxIcon, errMsg } = styles;
    const { formik, id } = props;
    const [showPass, setShowPass] = useState(false);
    const handleShowPassword = () => {
        setShowPass(!showPass);
    };
    const isPassword = type === 'password';
    const isShowTextPassword = type === 'password' && showPass ? 'text' : type;
    const isErr = formik.touched[id] && formik.errors[id];
    const messageErr = formik.errors[id];

    return (
        <div className={container}>
            <div className={labelInput}>{label}</div>
            <div className={boxInput}>
                <input
                    type={isShowTextPassword}
                    {...props}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[id]}
                />
                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPass ? <FiEyeOff /> : <FiEye />}
                    </div>
                )}
                {isErr && <div className={errMsg}>{messageErr}</div>}
            </div>
        </div>
    );
}

export default InputCommon;
