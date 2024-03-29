import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";

type Props = {};

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>FinShark Design Page</h1>
      <h2>
        this is FinShark's design page. This is where we will house various
        designs aspect of App
      </h2>
      <RatioList />
      <Table />
    </>
  );
};

export default DesignPage;
