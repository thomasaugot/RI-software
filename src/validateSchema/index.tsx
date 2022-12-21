import * as yup from 'yup'

export const SignupSchema = yup.object().shape({
    companyName: yup.string().required("Required"),
    fullCompanyName: yup.string().required("Required"),
    login: yup.string().required("Required"),
    email: yup.string().email("please enter a valid email").required("Required"),
    password: yup.string().min(6).required("required"),
    confirmPassword: yup.string().required("Required").nullable(),
    phoneNumber: yup.string().required("Required").nullable(),
});

export const SignInSchema = yup.object().shape({
    userId: yup.string().required("Required"),
    password: yup.string().min(6).required("required"),
})