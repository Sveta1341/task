import { css } from "@emotion/css";
import React, { FC, useState, ChangeEvent } from "react";

import { Mapping } from "../../../types";

interface InputProps {
  setMapping: (params: Mapping) => void;
}

export const Input: FC<InputProps> = ({ setMapping }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validation = (valu: Mapping) => {
    let bool = true;
    if (typeof valu !== "object") {
      bool = false;
      setError("Mapping is not object");
    } else if (typeof valu.sources === "undefined") {
      bool = false;
      setError("In mapping doesn`t exist sources,please add");
    } else if (typeof valu.actions === "undefined") {
      bool = false;
      setError("In mapping doesn`t exist actions,please add");
    } else if (typeof valu.targets === "undefined") {
      bool = false;
      setError("In mapping doesn`t exist targets,please add");
    }
    return bool;
  };

  const handleChangeMapp = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };
  const handleSubmit = () => {
    const newMap = JSON.parse(value);
    if (validation(newMap) === true) {
      setMapping(newMap);
      setError("");
    }
  };

  return (
    <div
      className={css`
        width: 400px;
        height: 100px;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          margin: 10px;
        `}
      >
        <textarea
          id="input"
          className={css`
            margin-left: 10px;
          `}
          value={value}
          placeholder="Write mapping"
          onChange={handleChangeMapp}
        >
          {value}
        </textarea>
        <span
          className={css`
            color: red;
            font-size: 10px;
          `}
        >
          {error}
        </span>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        name="Generate"
        className={css`
          border: solid black 1px;
          border-radius: 5px;
          background-color: cadetblue;
        `}
      >
        Generate
      </button>
    </div>
  );
};
