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
    <div
      className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
      key={id}
      id={id}
    >
      <h2 className="font-bold text-center text-black md:text-left">
        {searchResults.name} ({searchResults.symbol})
      </h2>
      <p className="text-black">{searchResults.currency}</p>
      <p className="font-bold text-black">
        {searchResults.exchangeShortName} - {searchResults.stockExchange}
      </p>
      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResults.symbol}
      />
    </div>
  );
};

export default Card;
