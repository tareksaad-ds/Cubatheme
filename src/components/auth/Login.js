import React from "react";
import "./Login.css";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { signinAction } from "../../actions/authActions";
import { useFormik } from "formik";
import image from "../../assests/logo.png";

function Login(props) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(
        signinAction(formik.values.email, formik.values.password, {
          isLogin: true,
          history: props.history,
        })
      );
    },
  });

  // useEffect(() => {
  //   if (localStorage.getItem("userId")) {
  //     props.history.push("/");
  //   }
  // });
  const email = formik.values.email;
  const password = formik.values.password;
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  return (
    <div className=" loogin">
      <img src={image} alt="cuba" className="cub" />
      <div className="card container">
        <Form onSubmit={formik.handleSubmit} className="log container">
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              id="password"
              placeholder="Enter your password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </Form.Group>

          <Button
            id="signin"
            disabled={!validateForm}
            type="submit"
            variant="primary"
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
