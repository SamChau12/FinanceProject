import React, { ChangeEvent, SyntheticEvent } from "react";

interface Props {
  // onClick: (e: SyntheticEvent) => void;
  // search: string | undefined;
  // handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onSearchSubmit,
  search,
  handleSearchChange,
}: Props): JSX.Element => {
  return (
    // <div>
    //   <input value={search} onChange={(e) => handleChange(e)}></input>
    //   <button onClick={(e) => onClick(e)} />
    // </div>
    <>
      <form onSubmit={onSearchSubmit}>
        <input value={search} onChange={handleSearchChange} />
      </form>
    </>
  );
};

export default Search;
