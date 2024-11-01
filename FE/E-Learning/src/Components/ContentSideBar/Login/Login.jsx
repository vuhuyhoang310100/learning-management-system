import InputCommon from '@components/InputCommon/InputCommon';
import images from '@assets/images/images';
import styles from './styles.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext } from 'react';
import { ToastContext } from '@/Context/ToastProvider';
import Button from '@components/Button/Button';
import { signIn } from '@/apis/authService';

function Login() {
    const {
        container,
        boxLogo,
        containerTitle,
        title,
        subTitle,
        textDes,
        submitBtn
    } = styles;
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
        onSubmit: async (values) => {
            const { email, password } = values;
            await signIn({ email, password });
            // console.log(values);
        }
    });
    // console.log(formik.errors);

    return (
        <div className={container}>
            <div className={boxLogo}>
                <img src={images.logo} alt='' />
            </div>
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
                {/* <Button text>Quên mật khẩu?</Button> */}
                <Button
                    type='submit'
                    // onClick={() => toast.success('Đăng nhập thành công')}
                    primary
                    long
                    className={submitBtn}
                >
                    Đăng nhập
                </Button>
            </form>
            <div className={textDes}>
                Chưa có tài khoản?<Button text>Đăng ký</Button>
            </div>
        </div>
    );
}

export default Login;
