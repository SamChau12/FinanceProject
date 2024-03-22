import React, { SyntheticEvent } from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResults: CompanySearch[];
}

const CardList: React.FC<Props> = ({ searchResults }: Props): JSX.Element => {
  return (
    // <div>
    //   <Card companyName="Apple" ticker="APPL" price={100} />
    //   <Card companyName="Microsoft" ticker="MSFT" price={200} />
    //   <Card companyName="Tsla" ticker="T" price={300} />
    // </div>
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return (
            <Card id={result.symbol} key={uuidv4()} searchResults={result} />
          );
        })
      ) : (
        <h1>No Results </h1>
      )}
    </>
  );
};

export default CardList;
