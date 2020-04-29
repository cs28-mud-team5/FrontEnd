import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = (props) => {
  const [user, setUser] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  const handleChanges = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("https://lambda-mud-test.herokuapp.com/api/registration/", user)
      .then((res) => {
        localStorage.setItem("key", res.data.key);
        console.log(res);
        props.history.push("/game");
      })
      .catch((err) => console.log("Registration error: ", err.response));
  };

  return (
    <div>
      <h1>Auth Page</h1>
      <Form>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            onChange={handleChanges}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password1"
            id="password1"
            placeholder="Password"
            onChange={handleChanges}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Verify Password</Label>
          <Input
            type="password"
            name="password2"
            id="password2"
            placeholder="Verify Password"
            onChange={handleChanges}
          />
        </FormGroup>
        <Button onClick={handleRegister}>Register Account</Button>
      </Form>
      <Link to="/">Returning user? Log in</Link>
    </div>
  );
};

export default Register;
