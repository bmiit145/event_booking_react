// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Card, CardBody, Col, Container, Row, FormFeedback, Input, Button, Form } from 'reactstrap';
// import ParticlesAuth from "../ParticlesAuth";

// //import images 
// import logoLight from "../../../assets/images/logo-light.png";

// //formik
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const BasicSignUp = () => {
//     document.title = "Basic SignUp | Satnam Decor And Event";

//     const [passwordShow, setPasswordShow] = useState<boolean>(false);

//     const validation: any = useFormik({
//         // enableReinitialize : use this flag when initial values needs to be changed
//         enableReinitialize: true,

//         initialValues: {
//             email: '',
//             userName: '',
//             password: '',
//         },
//         validationSchema: Yup.object({
//             email: Yup.string().required("Please Enter Your Email")
//                 .email("Please include an @ in the email address"),
//             userName: Yup.string().required("Please Enter Your Username"),
//             password: Yup.string()
//                 .min(8, 'Password must be at least 8 characters')
//                 .matches(RegExp('(.*[a-z].*)'), 'At least lowercase letter')
//                 .matches(RegExp('(.*[A-Z].*)'), 'At least uppercase letter')
//                 .matches(RegExp('(.*[0-9].*)'), 'At least one number')
//                 .required("Please Enter Passward")
//         }),
//         onSubmit: (values) => {
//             console.log("values", values)
//         }
//     });

//     return (
//         <React.Fragment>
//             <ParticlesAuth>
//                 <div className="auth-page-content">

//                     <Container>
//                         <Row>
//                             <Col lg={12}>
//                                 <div className="text-center mt-sm-5 mb-4 text-white-50">
//                                     <div>
//                                         <Link to="/" className="d-inline-block auth-logo">
//                                             <img src={logoLight} alt="" height="20" />
//                                         </Link>
//                                     </div>
//                                     <p className="mt-3 fs-15 fw-medium">Premium Admin & Dashboard Template</p>
//                                 </div>
//                             </Col>
//                         </Row>

//                         <Row className="justify-content-center">
//                             <Col md={8} lg={6} xl={5}>
//                                 <Card className="mt-4">

//                                     <CardBody className="p-4">
//                                         <div className="text-center mt-2">
//                                             <h5 className="text-primary">Create New Account</h5>
//                                             <p className="text-muted">Get your free velzon account now</p>
//                                         </div>
//                                         <div className="p-2 mt-4">
//                                         <Form onSubmit={(e) => {
//                                                 e.preventDefault();
//                                                 validation.handleSubmit();
//                                                 return false;
//                                             }} className="needs-validation" action="#">

//                                                 <div className="mb-3">
//                                                     <label htmlFor="useremail" className="form-label">Email <span className="text-danger">*</span></label>
//                                                     <Input type="email" className="form-control" id="useremail" placeholder="Enter email address"
//                                                         name="email"
//                                                         value={validation.values.email}
//                                                         onBlur={validation.handleBlur}
//                                                         onChange={validation.handleChange}
//                                                         invalid={validation.errors.email && validation.touched.email ? true : false}
//                                                     />
//                                                     {validation.errors.email && validation.touched.email ? (
//                                                         <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
//                                                     ) : null}
//                                                 </div>
//                                                 <div className="mb-3">
//                                                     <label htmlFor="username" className="form-label">Username <span className="text-danger">*</span></label>
//                                                     <Input type="text" className="form-control" id="username" placeholder="Enter username"
//                                                         name="userName"
//                                                         onChange={validation.handleChange}
//                                                         onBlur={validation.handleBlur}
//                                                         value={validation.values.userName || ""}
//                                                         invalid={
//                                                             validation.touched.userName && validation.errors.userName ? true : false
//                                                         }
//                                                     />
//                                                     {validation.touched.userName && validation.errors.userName ? (
//                                                         <FormFeedback type="invalid">{validation.errors.userName}</FormFeedback>
//                                                     ) : null}
//                                                 </div>

//                                                 <div className="mb-3">
//                                                     <label className="form-label" htmlFor="password-input">Password</label>
//                                                     <div className="position-relative auth-pass-inputgroup">
//                                                         <Input
//                                                             type={passwordShow ? "text" : "password"}
//                                                             className="form-control pe-5 password-input"
//                                                             placeholder="Enter password"
//                                                             id="password-input"
//                                                             name="password"
//                                                             value={validation.values.password}
//                                                             onBlur={validation.handleBlur}
//                                                             onChange={validation.handleChange}
//                                                             invalid={validation.errors.password && validation.touched.password ? true : false}
//                                                         />
//                                                         {validation.errors.password && validation.touched.password ? (
//                                                             <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
//                                                         ) : null}
//                                                         <Button color="link" onClick={() => setPasswordShow(!passwordShow)} className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button"
//                                                             id="password-addon"><i className="ri-eye-fill align-middle"></i></Button>
//                                                     </div>
//                                                 </div>

//                                                 <div className="mb-4">
//                                                     <p className="mb-0 fs-12 text-muted fst-italic">By registering you agree to the Velzon
//                                                         <Link to="#" className="text-primary text-decoration-underline fst-normal fw-medium">Terms of Use</Link></p>
//                                                 </div>

//                                                 <div id="password-contain" className="p-3 bg-light mb-2 rounded">
//                                                     <h5 className="fs-13">Password must contain:</h5>
//                                                     <p id="pass-length" className="invalid fs-12 mb-2">Minimum <b>8 characters</b></p>
//                                                     <p id="pass-lower" className="invalid fs-12 mb-2">At <b>lowercase</b> letter (a-z)</p>
//                                                     <p id="pass-upper" className="invalid fs-12 mb-2">At least <b>uppercase</b> letter (A-Z)</p>
//                                                     <p id="pass-number" className="invalid fs-12 mb-0">A least <b>number</b> (0-9)</p>
//                                                 </div>

//                                                 <div className="mt-4">
//                                                     <button className="btn btn-success w-100" type="submit">Sign Up</button>
//                                                 </div>

//                                                 <div className="mt-4 text-center">
//                                                     <div className="signin-other-title">
//                                                         <h5 className="fs-13 mb-4 title text-muted">Create account with</h5>
//                                                     </div>

//                                                     <div>
//                                                         <button type="button" className="btn btn-primary btn-icon waves-effect waves-light"><i className="ri-facebook-fill fs-16"></i></button>{" "}
//                                                         <button type="button" className="btn btn-danger btn-icon waves-effect waves-light"><i className="ri-google-fill fs-16"></i></button>{" "}
//                                                         <button type="button" className="btn btn-dark btn-icon waves-effect waves-light"><i className="ri-github-fill fs-16"></i></button>{" "}
//                                                         <button type="button" className="btn btn-info btn-icon waves-effect waves-light"><i className="ri-twitter-fill fs-16"></i></button>
//                                                     </div>
//                                                 </div>
//                                             </Form>
//                                         </div>
//                                     </CardBody>
//                                 </Card>

//                                 <div className="mt-4 text-center">
//                                     <p className="mb-0">Already have an account ? <Link to="/auth-signin-basic" className="fw-semibold text-primary text-decoration-underline"> Signin </Link> </p>
//                                 </div>

//                             </Col>
//                         </Row>
//                     </Container>
//                 </div>
//             </ParticlesAuth>
//         </React.Fragment>
//     );
// };

// export default BasicSignUp;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row, Form, FormFeedback, Input, Button } from 'reactstrap';

//formik
import { useFormik } from 'formik';
import * as Yup from 'yup';

import ParticlesAuth from "../ParticlesAuth";

//import images 
import logoLight from "../../../assets/images/logo-light.png";

const BasicSignUp = () => {
    document.title = "Basic SignUp | Satnam Decor And Event";

    const [passwordShow, setPasswordShow] = useState<boolean>(false);

    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: '',
            userName: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email")
                .email("Please include an @ in the email address"),
            userName: Yup.string().required("Please Enter Your Username"),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .matches(RegExp('(.*[a-z].*)'), 'At least lowercase letter')
                .matches(RegExp('(.*[A-Z].*)'), 'At least uppercase letter')
                .matches(RegExp('(.*[0-9].*)'), 'At least one number')
                .required("Please Enter Passward")
        }),
        onSubmit: (values) => {
            console.log("values", values)
        }
    });

    return (
        <React.Fragment>
            <ParticlesAuth>
                <div className="auth-page-content mt-lg-5">

                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="text-center mt-sm-5 mb-4 text-white-50">
                                    <div>
                                        <Link to="/" className="d-inline-block auth-logo">
                                            <img src={logoLight} alt="" height="20" />
                                        </Link>
                                    </div>
                                    <p className="mt-3 fs-15 fw-medium">Premium Admin & Dashboard Template</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col md={8} lg={6} xl={5}>
                                <Card className="mt-4">

                                    <CardBody className="p-4">
                                        <div className="text-center mt-2">
                                            <h5 className="text-primary">Create New Account</h5>
                                            <p className="text-muted">Get your free velzon account now</p>
                                        </div>
                                        <div className="p-2 mt-4">
                                            <Form onSubmit={(e) => {
                                                e.preventDefault();
                                                validation.handleSubmit();
                                                return false;
                                            }} className="needs-validation" action="#">

                                                <div className="mb-3">
                                                    <label htmlFor="useremail" className="form-label">Email <span className="text-danger">*</span></label>
                                                    <Input type="email" className="form-control" id="useremail" placeholder="Enter email address"
                                                        name="email"
                                                        value={validation.values.email}
                                                        onBlur={validation.handleBlur}
                                                        onChange={validation.handleChange}
                                                        invalid={validation.errors.email && validation.touched.email ? true : false}
                                                    />
                                                    {validation.errors.email && validation.touched.email ? (
                                                        <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                                                    ) : null}
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="username" className="form-label">Username <span className="text-danger">*</span></label>
                                                    <Input type="text" className="form-control" id="username" placeholder="Enter username"
                                                        name="userName"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.userName || ""}
                                                        invalid={
                                                            validation.touched.userName && validation.errors.userName ? true : false
                                                        }
                                                    />
                                                    {validation.touched.userName && validation.errors.userName ? (
                                                        <FormFeedback type="invalid">{validation.errors.userName}</FormFeedback>
                                                    ) : null}
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="password-input">Password</label>
                                                    <div className="position-relative auth-pass-inputgroup">
                                                        <Input
                                                            type={passwordShow ? "text" : "password"}
                                                            className="form-control pe-5 password-input"
                                                            placeholder="Enter password"
                                                            id="password-input"
                                                            name="password"
                                                            value={validation.values.password}
                                                            onBlur={validation.handleBlur}
                                                            onChange={validation.handleChange}
                                                            invalid={validation.errors.password && validation.touched.password ? true : false}
                                                        />
                                                        {validation.errors.password && validation.touched.password ? (
                                                            <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                                                        ) : null}
                                                        <Button color="link" onClick={() => setPasswordShow(!passwordShow)} className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button"
                                                            id="password-addon"><i className="ri-eye-fill align-middle"></i></Button>
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <p className="mb-0 fs-12 text-muted fst-italic">By registering you agree to the Velzon
                                                        <Link to="#" className="text-primary text-decoration-underline fst-normal fw-medium">Terms of Use</Link></p>
                                                </div>

                                                <div id="password-contain" className="p-3 bg-light mb-2 rounded">
                                                    <h5 className="fs-13">Password must contain:</h5>
                                                    <p id="pass-length" className="invalid fs-12 mb-2">Minimum <b>8 characters</b></p>
                                                    <p id="pass-lower" className="invalid fs-12 mb-2">At <b>lowercase</b> letter (a-z)</p>
                                                    <p id="pass-upper" className="invalid fs-12 mb-2">At least <b>uppercase</b> letter (A-Z)</p>
                                                    <p id="pass-number" className="invalid fs-12 mb-0">A least <b>number</b> (0-9)</p>
                                                </div>

                                                <div className="mt-4">
                                                    <button className="btn btn-success w-100" type="submit">Sign Up</button>
                                                </div>

                                                <div className="mt-4 text-center">
                                                    <div className="signin-other-title">
                                                        <h5 className="fs-13 mb-4 title text-muted">Create account with</h5>
                                                    </div>

                                                    <div>
                                                        <button type="button" className="btn btn-primary btn-icon waves-effect waves-light"><i className="ri-facebook-fill fs-16"></i></button>{" "}
                                                        <button type="button" className="btn btn-danger btn-icon waves-effect waves-light"><i className="ri-google-fill fs-16"></i></button>{" "}
                                                        <button type="button" className="btn btn-dark btn-icon waves-effect waves-light"><i className="ri-github-fill fs-16"></i></button>{" "}
                                                        <button type="button" className="btn btn-info btn-icon waves-effect waves-light"><i className="ri-twitter-fill fs-16"></i></button>
                                                    </div>
                                                </div>
                                            </Form>
                                        </div>
                                    </CardBody>
                                </Card>

                                <div className="mt-4 text-center">
                                    <p className="mb-0">Already have an account ? <Link to="/auth-signin-basic" className="fw-semibold text-primary text-decoration-underline"> Signin </Link> </p>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </ParticlesAuth>
        </React.Fragment>
    );
};

export default BasicSignUp;