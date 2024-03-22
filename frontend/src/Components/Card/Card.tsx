import React from "react";
import "./Card.css";
import { CompanySearch } from "../../company";
// type Props = {};
//interface helps to label anything like data check and spell check
//props are used to pass data without duplicating components
interface Props {
  id: string;
  searchResults: CompanySearch;
}

//passing data through function
const Card: React.FC<Props> = ({ id, searchResults }: Props): JSX.Element => {
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
    </div>
  );
};

export default Card;
