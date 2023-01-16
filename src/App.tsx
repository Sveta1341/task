import "./App.css";
import { css } from "@emotion/css";
import { v4 as uuidv4 } from "uuid";
import { useMemo, useState } from "react";
import { TransformationNode } from "./components/Transformation";
import { getTransformations } from "./utils/getTransformations";
import { DEFAULT_MAPPING } from "./constants/mapping";
import { Input } from "./components/Form/Input";

function App() {
  const [mapp, setMapping] = useState(DEFAULT_MAPPING);
  const transformations = useMemo(() => getTransformations(mapp), [mapp]);

  return (
    <div className="App">
      <Input key={uuidv4()} setMapping={setMapping} />
      <div
        className={css`
          @media (min-width: 420px) {
            width: 1250px;
          }
        `}
      >
        {transformations.map((transformation) => (
          <TransformationNode
            key={uuidv4()}
            sources={transformation.sources}
            target={transformation.target}
            actions={transformation.actions}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
