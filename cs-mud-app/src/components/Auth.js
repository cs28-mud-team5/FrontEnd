import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { BackDiv, AuthBox } from "./Styles";
import axios from "axios";

const Auth = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChanges = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://lambda-mud-test.herokuapp.com/api/login/", user)
      .then((res) => {
        localStorage.setItem("key", res.data.key);
        console.log(res);
        props.history.push("/game");
      })
      .catch((err) => console.log("Login error: ", err.response));
  };

  return (
    <BackDiv>
      <h1>Team 5 MUD Login</h1>
      <AuthBox>
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
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChanges}
            />
          </FormGroup>
          <Button onClick={handleLogin}>Log In</Button>
        </Form>
      </AuthBox>
      <Link to="/register">New user? Sign up!</Link>
    </BackDiv>
  );
};

export default Auth;
