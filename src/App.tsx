import './App.css';
import '@xyflow/react/dist/style.css';
import FlowPage from './pages/flow/flowPage';

function App() {
  return (
    <div className='box'>
      <div className='col-flow'>
        <FlowPage></FlowPage>
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
