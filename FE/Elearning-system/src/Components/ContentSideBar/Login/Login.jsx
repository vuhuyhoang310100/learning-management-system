import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext } from 'react';
import { ToastContext } from '@/Context/ToastProvider';

function Login() {
    const { container, containerTitle, title, subTitle } = styles;
    const { toast } = useContext(ToastContext);

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
        onSubmit: (values) => {
            console.log(values);
        }
    });
    // console.log(formik.errors);

    return (
        <div className={container}>
            <div className={containerTitle}>
                <span className={title}>Chào mừng trở lại</span>
                <p className={subTitle}>
                    Chào mừng trở lại! Hãy nhập thông tin của bạn.
                </p>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id='email'
                    label='Email'
                    type='text'
                    formik={formik}
                />
                <InputCommon
                    id='password'
                    label='Password'
                    type='password'
                    formik={formik}
                />
                <button
                    type='submit'
                    onClick={() => toast.success('Đăng nhập thành công')}
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
