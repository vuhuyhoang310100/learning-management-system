import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContext } from '@/Context/ToastProvider';
import { useContext } from 'react';

function Register() {
    const { container, containerTitle, title, subTitle } = styles;
    const { toast } = useContext(ToastContext);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            cfpassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Email không hợp lệ')
                .required('Email là bắt buộc'),
            password: Yup.string()
                .min(6, 'Mật khẩu ít nhất 6 kí tự')
                .required('Mật khẩu là bắt buộc'),
            cfpassword: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Hai mật khẩu của bạn không khớp'
            )
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });
    // console.log(formik.errors);

    return (
        <div className={container}>
            <div className={containerTitle}>
                <span className={title}>Tạo tài khoản</span>
                <p className={subTitle}>
                    Đăng ký và bắt đầu khám phá khóa học của bạn.
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
                    label='Mật khẩu'
                    type='password'
                    formik={formik}
                />
                <InputCommon
                    id='cfpassword'
                    label='Xác nhận mật khẩu'
                    type='password'
                    formik={formik}
                />
                <button
                    type='submit'
                    onClick={() => toast.success('Đăng ký thành công')}
                >
                    Tạo tài khoản
                </button>
            </form>
        </div>
    );
}

export default Register;
