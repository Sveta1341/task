import './App.css';
import { TransformationComponent } from './components/Transformation';
import { getTransformations } from './hooks/getTransformations';
import { v4 as uuidv4 } from 'uuid';
import { mapping } from './constants/mapping';

function App() {
	const transformations = getTransformations(mapping);

  return (
    <div className="App">
        {transformations.map((transformation)=> <TransformationComponent  key={uuidv4()} sources={transformation.sources} target={transformation.target} actions={transformation.actions}/>)}
    </div>
  );
}

export default App;
