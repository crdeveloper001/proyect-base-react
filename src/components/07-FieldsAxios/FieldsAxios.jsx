import React, { useEffect, useState } from "react";
import GetAllFields from "../../services/FieldsService";
import { Table } from "react-bootstrap";

export const FieldsAxios = () => {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    const request = GetAllFields();

    request.then((result) => {
      setFields(result);
      // console.log(result);
    });
  }, []);

  return (
    <div>
      <Table striped bordered responsive hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIELD Name</th>
            <th>FIELD PHONE Name</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((item) => {
            return (
              <>
                <td>
                  <tr>{item.id}</tr>
                  <tr>{item.fieldName}</tr>
                  <tr>{item.fieldPhone}</tr>
                </td>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
