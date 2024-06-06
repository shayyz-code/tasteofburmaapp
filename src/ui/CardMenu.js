"use client";
import styled from "styled-components";
import CardMenuItem from "./CardMenuItem";
import { useState } from "react";
import SecondaryButton from "./SecondaryButton";
import theme from "./theme";

const Div = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const FilterBar = styled.ul`
  display: flex;

  div {
    display: flex;
    justify-content: space-between;
    width: 80px;
    align-items: center;
    font-size: ${theme.fontsize.menuDescription};
    padding: 0 10px 0 10px;
    color: ${theme.color.primary};
  }
`;

const Ul = styled.ul`
  margin: 40px 0 20px 0;
`;

export default function CardMenu({ docs }) {
  const [selectedDocs, setSelectedDocs] = useState(docs);
  const [showExclusive, setShowExclusive] = useState(false);
  const [showSpecial, setShowSpecial] = useState(false);

  const handleExclusiveOnClick = () => {
    setShowSpecial(false);
    if (!showExclusive) {
      setShowExclusive(true);
      setSelectedDocs(docs.filter((doc) => doc.exclusive === true));
    } else if (showExclusive) {
      setShowExclusive(false);
      setSelectedDocs(docs);
    }
  };

  const handleSpecialOnClick = () => {
    setShowExclusive(false);
    if (!showSpecial) {
      setShowSpecial(true);
      setSelectedDocs(docs.filter((doc) => doc.special === true));
    } else if (showSpecial) {
      setShowSpecial(false);
      setSelectedDocs(docs);
    }
  };

  console.log(docs);
  return (
    <Div>
      <FilterBar>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z" />
          </svg>
          Filter:
        </div>
        <SecondaryButton
          handleOnClick={handleExclusiveOnClick}
          isClicked={showExclusive}
        >
          Exclusive
        </SecondaryButton>

        <SecondaryButton
          handleOnClick={handleSpecialOnClick}
          isClicked={showSpecial}
        >
          Special
        </SecondaryButton>
      </FilterBar>

      <Ul>
        {selectedDocs.map(
          ({
            id,
            name,
            description,
            price,
            pictureurl,
            exclusive,
            special,
          }) => (
            <CardMenuItem
              key={id}
              name={name}
              description={description}
              price={price}
              src={pictureurl}
              exclusive={exclusive}
              special={special}
            />
          )
        )}
      </Ul>
    </Div>
  );
}
