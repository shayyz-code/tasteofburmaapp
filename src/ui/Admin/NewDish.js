import { firebaseNewDish } from "@/lib/firebasenewdish";
import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  flex-flow: column;
`;

export default function NewDish() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [picture, setPicture] = useState({});
  const [status, setStatus] = useState(""); // fail, loading, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    console.log(name, price, picture);

    const res = await firebaseNewDish(name, price, picture);
    console.log(res);
    setStatus(res);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Title
        <input
          type={"text"}
          onChange={({ target }) => setName(target.value)}
          value={name}
        />
      </Label>
      <Label>
        Price
        <input
          type={"number"}
          onChange={({ target }) => setPrice(target.value)}
          value={price}
        />
      </Label>
      <Label>
        File
        <input
          type={"file"}
          onChange={({ target }) => setPicture(target.files[0])}
        />
      </Label>
      {status === "loading" ? (
        <>{status}</>
      ) : status === "fail" || status === "success" ? (
        <>
          {status}
          <button>Submit</button>
        </>
      ) : (
        <button>Submit</button>
      )}
    </Form>
  );
}
