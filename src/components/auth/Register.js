import { useFormik } from "formik";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { signupAction } from "../../actions/authActions";
import "./Register.css";
import image from "../../assests/logo.png";
import { Link } from "react-router-dom";

function Register(props) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      dispatch(signupAction(user));
      props.history.push("/login");
    },
  });
  const name = formik.values.name;
  const email = formik.values.email;
  const password = formik.values.password;
  const user = { name, email, password };

  return (
    <div className="register">
      <img src={image} alt="cuba" />
      <div className="card container">
        <Form onSubmit={formik.handleSubmit} className="reg container">
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              placeholder="Enter your name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              required
            />
          </Form.Group>
          <Button id="signup" type="submit" variant="primary">
            Submit
          </Button>
          <Link className="sign" to="/login">
            if you have an account, sign in
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Register;
