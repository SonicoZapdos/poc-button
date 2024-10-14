import './App.css';
import '@xyflow/react/dist/style.css';
import FlowTable from './components/flowTable/flow';

function App() {
  return (
    <div className='box'>
      <div className='col-button'>  
      </div>
      <div className='col-flow'>
        <FlowTable></FlowTable>
      </div>
    </div>
  );

  // <div className='box'>
  //   <ButtonMutliClick></ButtonMutliClick>
  //   <ColorButton></ColorButton>
  //   <InputAparencia></InputAparencia>
  // </div>
}

export default App;
