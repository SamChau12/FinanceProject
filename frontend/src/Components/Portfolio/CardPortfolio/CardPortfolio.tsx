import React, { SyntheticEvent } from "react";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";

interface Props {
  portfolioValues: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
  return (
    <>
      <h4>{portfolioValues}</h4>
      <DeletePortfolio
        onPortfolioDelete={onPortfolioDelete}
        portfolioValues={portfolioValues}
      />
    </>
  );
};

export default CardPortfolio;
