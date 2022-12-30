import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { TransformationComponent } from "./components/Transformation";
import { getTransformations } from "./utils/getTransformations";
import { mapping } from "./constants/mapping";
import { InputComponent } from "./components/Form/Input";
import { Transformation } from "./types";

function App() {
  const [mapp, setMapping] = useState(mapping);
  const [transformations, setTransformations] = useState<Transformation[]>([]);

  useEffect(() => {
    const transformation = getTransformations(mapp);
    setTransformations(transformation);
  }, [mapp]);

  return (
    <div className="App">
      <InputComponent key={uuidv4()} setMapping={setMapping} />
      {transformations.map((transformation) => (
        <TransformationComponent
          key={uuidv4()}
          sources={transformation.sources}
          target={transformation.target}
          actions={transformation.actions}
        />
      ))}
    </div>
  );
}

export default App;
