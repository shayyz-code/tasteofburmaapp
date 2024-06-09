"use client";

import { firebaseNewDish } from "@/lib/firebasenewdish";
import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 100px 0 0 0;
`;

const Label = styled.label`
  display: flex;
  flex-flow: column;
`;

export default function NewDish() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState({});
  const [exclusive, setExclusive] = useState(false);
  const [special, setSpecial] = useState(false);
  const [status, setStatus] = useState(""); // fail, loading, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    console.log(name, price, description, picture, exclusive, special);

    const res = await firebaseNewDish(
      name,
      price,
      description,
      picture,
      exclusive,
      special
    );
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
        Description
        <input
          type={"text"}
          onChange={({ target }) => setDescription(target.value)}
          value={description}
        />
      </Label>
      <Label>
        Make exclusive
        <input
          type={"checkbox"}
          onChange={() => setExclusive(!exclusive)}
          value={exclusive}
        />
      </Label>
      <Label>
        Make special
        <input
          type={"checkbox"}
          onChange={() => setSpecial(!special)}
          checked={special}
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
