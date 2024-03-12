import './App.css';
import FormFactory from './Component/FormFactory';
import { FormDataObject } from './Component/MockData/FormDataObject';
import { SampleApp } from './Component/NewSample/Sample';
function App() {
  return (
<>
{/* <FormFactory tittle={"Get User Details"} formData={FormDataObject}/> */}
<SampleApp/>
</>
  );
}

export default App;
