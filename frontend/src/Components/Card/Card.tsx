import React from "react";
import "./Card.css";
// type Props = {};
//interface helps to label anything like data check and spell check
//props are used to pass data without duplicating components
interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

//passing data through function
const Card = ({ companyName, ticker, price }: Props) => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1612428978260-2b9c7df20150?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt="Image"
      />
      <div className="details">
        <h2>
          {companyName} ({ticker})
        </h2>
        <p>${price}</p>
      </div>
      <p className="info">heheh test hehds sailesh le gu khanxa</p>
    </div>
  );
};

export default Card;
