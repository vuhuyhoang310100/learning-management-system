import InputCommon from '@components/InputCommon/InputCommon';
import images from '@assets/images/images';
import styles from './styles.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContext } from '@/Context/ToastProvider';
import { useContext } from 'react';
import Button from '@components/Button/Button';
import { register } from '@/apis/authService';

function Register() {
    const {
        container,
        boxLogo,
        containerTitle,
        title,
        subTitle,
        submitBtn,
        textDes
    } = styles;
    const { toast } = useContext(ToastContext);

    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: '',
            cfpassword: ''
        },
        validationSchema: Yup.object({
            userName: Yup.string()
                .max(10, 'Tên không quá 10 kí tự')
                .required('Tên là bắt buộc'),
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
        onSubmit: async (values) => {
            // console.log(values);
            const {
                userName: name,
                email,
                password,
                cfpassword: password_confirmation
            } = values;
            await register({ name, email, password, password_confirmation })
                .then((res) => {
                    toast.success('Đăng ký thành công!');
                    formik.resetForm();
                })
                .catch((err) => toast.error('Đăng ký thất bại!'));
        }
    });
    // console.log(formik.errors);

    return (
        <div className={container}>
            <div className={boxLogo}>
                <img src={images.logo} alt='' />
            </div>
            <div className={containerTitle}>
                <span className={title}>Tạo tài khoản</span>
                <p className={subTitle}>
                    Đăng ký và bắt đầu khám phá khóa học của bạn.
                </p>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id='userName'
                    label='Tên của bạn?'
                    type='text'
                    formik={formik}
                />
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
                <Button
                    type='submit'
                    // onClick={() => toast.success('Đăng ký thành công')}
                    primary
                    long
                    className={submitBtn}
                >
                    Tạo tài khoản
                </Button>
            </form>
            <div className={textDes}>
                Đã có tài khoản?<Button text>Đăng nhập</Button>
            </div>
        </div>
    );
}

export default Register;
