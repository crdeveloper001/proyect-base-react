import React, { useState } from "react";
import { Child1 } from "../02-ParentAndChildComponent/Child1";
import { Table, Container } from "react-bootstrap";
export const ContactForm = () => {

  
  return (
    <Container>
     <Table striped bordered responsive hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
       
      </tbody>
     </Table>
    </Container>
  );
};
