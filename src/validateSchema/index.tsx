import * as yup from 'yup'

export const SignupSchema = yup.object().shape({
    companyName: yup.string().required("Required"),
    login: yup.string().required("Required"),
    email: yup.string().email("please enter a valid email").required("Required"),
    password: yup.string().min(6).required("required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"),null], "Passwords doesn't much").required("Required").nullable(),
    phoneNumber: yup.string().required("Required").nullable(),
});

export const SignInSchema = yup.object().shape({
    email: yup.string().email("Enter valid email").required("Required"),
    password: yup.string().min(6).required("required"),
})