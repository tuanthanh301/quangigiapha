import { Button, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storeAddAccount } from "../../store/auth-reducer";
import { BackGroundRegister } from "./registerStyle";

const initFormValue = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const isEmptyValue = (value) => {
  return !value || value.trim().length < 1;
};
const isEmailValid = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};
const Register = () => {
  const [formValue, setFormValue] = useState(initFormValue);
  const [formError, setFormError] = useState({});
  const dispatch = useDispatch()
  const validateForm = () => {
    const error = {};
    if (isEmptyValue(formValue.firstName)) {
      error["firstName"] = "First Name is required";
    }
    if (isEmptyValue(formValue.lastName)) {
      error["lastName"] = "Last Name is required";
    }
    if (isEmptyValue(formValue.email)) {
      error["email"] = "Email is required";
    } else {
      if (!isEmailValid(formValue.email)) {
        error["email"] = "Email is invalid";
      }
    }
    if (isEmptyValue(formValue.password)) {
      error["password"] = "Password is required";
    }
    if (isEmptyValue(formValue.confirmPassword)) {
      error["confirmPassword"] = "Confirm Password is required";
    } else if (formValue.confirmPassword !== formValue.password) {
      error["confirmPassword"] = "Confirm Password not match";
    }
    setFormError(error);
    return Object.keys(error).length === 0;
  };
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    // event.preventDefault();
    if (validateForm()) {
      dispatch(storeAddAccount(formValue))
      navigate("/login");
    } else {
      console.log("Form invalid");
    }
  };

  return (
    <BackGroundRegister>
      <div className="register-container">
        <h1>Register Account</h1>
        <form>
          <div>
            <label htmlFor="first-name" className="form-label">
              First Name
            </label>
            <Input
              id="first-name"
              className="form-control"
              size="large"
              placeholder="Enter your first name"
              type="text"
              name="firstName"
              value={formValue.firstName}
              onChange={handleChange}
            />
            {formError.firstName && (
              <div className="error-feedback">{formError.firstName}</div>
            )}
          </div>
          <div>
            <label htmlFor="last-name" className="form-label">
              Last Name
            </label>
            <Input
              id="last-name"
              className="form-control"
              size="large"
              placeholder="Enter your last name"
              type="text"
              name="lastName"
              value={formValue.lastName}
              onChange={handleChange}
            />
            {formError.lastName && (
              <div className="error-feedback">{formError.lastName}</div>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Input
              id="email"
              className="form-control"
              size="large"
              placeholder="Enter your email"
              type="text"
              name="email"
              value={formValue.email}
              onChange={handleChange}
            />
            {formError.email && (
              <div className="error-feedback">{formError.email}</div>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <Input
              id="password"
              className="form-control"
              size="large"
              placeholder="Enter your password"
              type="password"
              name="password"
              value={formValue.password}
              onChange={handleChange}
            />
            {formError.password && (
              <div className="error-feedback">{formError.password}</div>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="confirm-password" className="form-label">
              Confirm Password
            </label>
            <Input
              id="confirm-password"
              className="form-control"
              size="large"
              placeholder="Confirm your password"
              type="password"
              name="confirmPassword"
              value={formValue.confirmPassword}
              onChange={handleChange}
            />
            {formError.confirmPassword && (
              <div className="error-feedback">{formError.confirmPassword}</div>
            )}
          </div>
          <Button onClick={handleSubmit} className="user-login" type="primary">
            Register
          </Button>
        </form>
      </div>
    </BackGroundRegister>
  );
};

export default Register;
