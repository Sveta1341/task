import React, { FC, useState, ChangeEvent } from "react";

import { Mapping } from "../../../types";

import "./input.css";

interface InputProps {
  setMapping: (params: Mapping) => void;
}

export const InputComponent: FC<InputProps> = ({ setMapping }) => {
  const [mapp, setMapp] = useState("");

  const handleChangeMapp = (event: ChangeEvent<HTMLInputElement>) => {
    setMapp(event.target.value);
  };
  const handleSubmit = () => {
    const newMap = JSON.parse(mapp);
    setMapping(newMap);
  };

  return (
    <div className="form">
      <label htmlFor="input">
        Write mapping
        <input
          id="input"
          type="text"
          className="input"
          value={mapp}
          onChange={handleChangeMapp}
        />
      </label>
      <input
        type="submit"
        onClick={handleSubmit}
        value="Generate"
        className="submit"
      />
    </div>
  );
};
