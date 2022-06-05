import EffectHookExample from '../EffectHookExample/EffectHookExample';
import MemoHookExample from '../MemoHookExample/MemoHookExample';
import StateHookExample from '../StateHookExample/StateHookExample';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <StateHookExample/> */}
      {/* <EffectHookExample/> */}
      <MemoHookExample/>
    </div>
  );
}

export default App;
