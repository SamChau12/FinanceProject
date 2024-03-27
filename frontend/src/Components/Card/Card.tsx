import React, { SyntheticEvent } from "react";
import "./Card.css";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";
// type Props = {};
//interface helps to label anything like data check and spell check
//props are used to pass data without duplicating components
interface Props {
  id: string;
  searchResults: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

//passing data through function
const Card: React.FC<Props> = ({
  id,
  searchResults,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <div className="card">
      <img alt="company logo" />
      <div className="details">
        <h2>
          {searchResults.name} ({searchResults.symbol})
        </h2>
        <p>${searchResults.currency}</p>
      </div>
      <p className="info">
        {searchResults.exchangeShortName}- {searchResults.stockExchange}
      </p>
      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResults.symbol}
      />
    </div>
  );
};

export default Card;
