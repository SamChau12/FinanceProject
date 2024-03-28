import React, { SyntheticEvent } from "react";

interface Props {
  onPortfolioDelete: (e: SyntheticEvent) => void;
  portfolioValues: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValues }: Props) => {
  return (
    <div>
      <form onSubmit={onPortfolioDelete}>
        <input hidden={true} value={portfolioValues} />
        <button>X</button>
      </form>
    </div>
  );
};

export default DeletePortfolio;
