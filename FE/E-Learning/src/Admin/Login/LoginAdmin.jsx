import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import images from '@assets/images/images';
import InputCommon from '@components/InputCommon/InputCommon';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function LoginAdmin() {
    const cx = classNames.bind(styles);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Email không hợp lệ')
                .required('Email là bắt buộc'),
            password: Yup.string()
                .min(6, 'Mật khẩu ít nhất 6 kí tự')
                .required('Mật khẩu là bắt buộc')
        }),
        onSubmit: {
            // console.log(values);
        }
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-body')}>
                <div className={cx('container')}>
                    <div className={cx('box-Logo')}>
                        <img src={images.logo} alt='' />
                    </div>
                    <div className={cx('box-Des')}>
                        <h2>Welcome to E-SYSTEM</h2>
                        <span>
                            Please sign-in to your admin account and start
                            managing the system
                        </span>
                    </div>
                    <form
                        onSubmit={formik.handleSubmit}
                        className={cx('form-styles')}
                    >
                        <InputCommon
                            id='email'
                            label='EMAIL'
                            type='text'
                            formik={formik}
                        />
                        <InputCommon
                            id='password'
                            label='PASSWORD'
                            type='password'
                            formik={formik}
                        />
                        <Button
                            type='submit'
                            primary
                            long
                            className={cx('button')}
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginAdmin;
