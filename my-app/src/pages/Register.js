import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import swal from "sweetalert";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(event) {
    event.preventDefault();
    const list = JSON.parse(localStorage.getItem("list"));

    //檢查帳號是否重複
    var verify = list.every((item) => {
      return item.email !== email;
    });

    if (verify) {
      const newUser = {
        email: email,
        created: new Date(),
        password: password,
      };
      list.push(newUser);
      localStorage.setItem("list", JSON.stringify(list));
      swal({
        title: "提示訊息",
        text: "註冊成功！",
        icon: "success",
      }).then(() => {
        window.location.replace("/");
      });
    } else {
      console.log("Used account!");
    }
  }
  return (
    <>
      <Card
        style={{
          width: "25rem",
          margin: 0,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Member Register</Card.Title>
          <Form onSubmit={handleRegister}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
export default Register;
