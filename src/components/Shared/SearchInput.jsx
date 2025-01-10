import { useState } from "react";

const SearchInput = ({ value, onChange, placeHolderText }) => {

  return (
    <form className=" mx-auto w-4/5 text-white-900 bg-primary-600 shadow rounded-xl">
      <input
        id="input"
        type="text"
        value={value} 
        onChange={onChange} 
        placeholder={placeHolderText}
        className="block w-full  px-4 py-2 border text-white-900 bg-primary-500 rounded-xl placeholder-white-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />

    </form>
  );
};

export default SearchInput;