import React from "react";

interface Props {
  portfolioValues: string;
}

const CardPortfolio = ({ portfolioValues }: Props) => {
  return (
    <>
      <h4>{portfolioValues}</h4>
      <button>X</button>
    </>
  );
};

export default CardPortfolio;
