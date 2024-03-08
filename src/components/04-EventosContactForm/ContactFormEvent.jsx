import React, { useState } from "react";
import { Button, Container, Form, Table, Alert } from "react-bootstrap";
import { useContact } from "../../hooks/useContacts";

export const ContactFormEvent = () => {
  const [errors, SetErrors] = useState({
    yourname: "",
    yourlastname: "",
    yourphone: "",
    youremail: "",
  });
  const [contactList, SetContactList] = useState([
    {
      id: 0,
      name: "",
      lastname: "",
      email: "",
      phone: "",
    },
  ]);

  const GetYourName = (e) => {
    const myName = e.target.value;

    if (myName === "") {
      SetErrors((prevErrors) => ({
        ...prevErrors,
        yourname: "CAMPO VACIO DE NOMBRE",
      }));
    } else {
      SetErrors((prevErrors) => ({
        ...prevErrors,
        yourname: "",
      }));

      SetContactList((prevContactList) => [
        {
          ...prevContactList[0],
          name: myName,
        },
        ...prevContactList.slice(1),
      ]);
    }
  };
  const GetYourLastName = (e) => {
    const mylastname = e.target.value;

    if (mylastname === "") {
      SetErrors((prevErrors) => ({
        ...prevErrors,
        yourlastname: "CAMPO VACIO DE NOMBRE",
      }));
    } else {
      SetErrors((prevErrors) => ({
        ...prevErrors,
        yourlastname: "",
      }));

      SetContactList((prevContactList) => [
        {
          ...prevContactList[0],
          lastname: mylastname,
        },
        ...prevContactList.slice(1),
      ]);
    }
  };
  const GetYourEmail = (e) => {
    const myemail = e.target.value;

    if (myemail === "") {
      SetErrors((prevErrors) => ({
        ...prevErrors,
        youremail: "CAMPO VACIO DE NOMBRE",
      }));
    } else {
      SetErrors((prevErrors) => ({
        ...prevErrors,
        youremail: "",
      }));

      SetContactList((prevContactList) => [
        {
          ...prevContactList[0],
          email: myemail,
        },
        ...prevContactList.slice(1),
      ]);
    }
  };
  const GetYourPhone = (e) => {
    const myphone = e.target.value;
    if (myphone === "") {
      SetErrors((prevErrors) => ({
        ...prevErrors,
        yourphone: "CAMPO VACIO DE NOMBRE",
      }));
    } else {
      SetErrors((prevErrors) => ({
        ...prevErrors,
        yourphone: "",
      }));

      SetContactList((prevContactList) => [
        {
          ...prevContactList[0],
          phone: myphone,
        },
        ...prevContactList.slice(1),
      ]);
    }
  };

  const SaveContact = (e) => {

    e.preventDefault();
    
    const formdata = {
      yourName: document.getElementById("yourname")?.value,
      yourLastName: document.getElementById("yourlastname")?.value,
      yourEmail: document.getElementById("youremail")?.value,
      yourPhone: document.getElementById("yourphone")?.value,
    };
    
    useContact(formdata);
   
  };

  return (
    <Container>
      <form onSubmit={(e) => SaveContact(e)}>
        <Form.Group >
          <Form.Label>YOUR NAME</Form.Label>
          <Form.Control
            id="yourname"
            type="text"
            placeholder="your name"
            onChange={GetYourName}
          />
        </Form.Group>

        <Form.Group >
          <Form.Label>YOUR LASTNAME</Form.Label>
          <Form.Control
            id="yourlastname"
            type="text"
            placeholder="your lastname"
           onChange={GetYourLastName}
          />
        </Form.Group>

        <Form.Group >
          <Form.Label>YOUR EMAIL</Form.Label>
          <Form.Control
            id="youremail"
            type="text"
            placeholder="your email"
           onChange={GetYourEmail}
          />
        </Form.Group>

        <Form.Group >
          <Form.Label>YOUR PHONE</Form.Label>
          <Form.Control id="yourphone" type="text" placeholder="your phone" 
          onChange={GetYourPhone}/>
        </Form.Group>

        <br />
        <Button variant="primary" type="submit">Create Contact</Button>
      </form>

      <hr />

      <Table striped bordered responsive hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.lastname}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
