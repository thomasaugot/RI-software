import { useState } from "react";
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from 'formik'
import "../SignUp/SignUpForm.scss";
import Input, { Type } from "../Input";
import { BiErrorCircle } from 'react-icons/bi'
import { SignInSchema } from "../../validateSchema";
import SignButton from "../SignButton";
import { useStateContext } from "../../utils/store";
import { getMeFn, login, verification } from "../../queries";
import { MyLoginFormValues } from "../../queries/types";
import { toast } from 'react-toastify';


const LoginForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const from = ((location.state as any)?.from.pathname as string) || '/';

    const { mutate: signin, isError: signError } = useMutation(login)
    const { mutate: verify } = useMutation(verification)

    const check = () => setIsChecked(!isChecked);

    const stateContext = useStateContext();
    const query = useQuery(['authUser'], getMeFn, {
        enabled: false,
        select: (data) => data.data.user,
        retry: 1,
        onSuccess: (data) => {
            stateContext.dispatch({ type: 'SET_USER', payload: data });
        },
    });


    const onSubmit = async (values: any) => {
        await signin(values)
        console.log(values)
        if (!signError) {
            query.refetch();
            toast.success('You successfully logged in');
            navigate(from);

        } else {
            setIsError(true)
        }

    }
    const { values, handleChange, handleSubmit, handleBlur } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit,
        validationSchema: SignInSchema
    })


    // const { mutate: loginUser, isLoading } = useMutation(
    //     (userData: MyLoginFormValues) => loginUserFn(userData),
    //     {
    //         onSuccess: () => {
    //             query.refetch();
    //             toast.success('You successfully logged in');
    //             navigate(from);
    //         },
    //         onError: (error: any) => {
    //             if (Array.isArray((error as any).response.data.error)) {
    //                 (error as any).response.data.error.forEach((el: any) =>
    //                     toast.error(el.message, {
    //                         position: 'top-right',
    //                     })
    //                 );
    //             } else {
    //                 toast.error((error as any).response.data.message, {
    //                     position: 'top-right',
    //                 });
    //             }
    //         },
    //     }
    // );

    return (
        <div className="registration-Div">
            <form
                onSubmit={handleSubmit}
                className="registration-form">
                <header>
                    <h2 className="registration-header">Sign In
                    </h2>
                    <h4 className="registration-header">
                        Don't have an account yet? <Link to="/registration">Register</Link>
                    </h4>
                </header>
                <div className={isError ? "error" : "class-error"}>
                    <BiErrorCircle />
                    <p>Wrong User info please check</p>
                </div>
                <div className="registration-info">
                    <Input
                        name='email'
                        placeholder="Email"
                        onBlur={handleBlur}
                        type={Type.text}
                        value={values.email}
                        onChange={handleChange}
                    />
                    <div className="field-container">
                        <Input
                            name='password'
                            type={passwordVisible ? Type.text : Type.password}
                            placeholder="min. 6 charcters"
                            onBlur={handleBlur}
                            value={values.password}
                            onChange={handleChange}
                        />
                        <span
                            title={passwordVisible ? "hide password" : "show password"}
                            className="input-icon"
                            onClick={() => {
                                setPasswordVisible(!passwordVisible);
                            }}
                        >
                            <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
                        </span>
                    </div>
                    <div className="reminder-section">
                        <div className="check-container">
                            <div className="check-box" onClick={check}>
                                <span className={isChecked ? "checked" : "unchecked"}></span>
                            </div>
                            <p>Remember me</p>
                        </div>
                        <Link to="#">Forget Password</Link>
                    </div>
                    <SignButton text="Sign In" />
                </div>
            </form>
        </div>
    );
};
export default LoginForm;