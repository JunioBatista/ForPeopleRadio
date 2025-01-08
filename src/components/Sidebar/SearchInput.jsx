import { useState } from "react";

const SearchInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className=" mx-auto w-4/5 text-white-900 bg-primary-500 shadow rounded-xl">
      <input
        id="input"
        type="text"
        value={value}
        onChange={handleChange}
        className="block w-full  px-4 py-2 border text-white-900 bg-primary-500 rounded-xl placeholder-white-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Search here"
      />

    </form>
  );
};

export default SearchInput;