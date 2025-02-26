import logo from './logo.svg';
import './App.css';
import './css/style.css';

function App() {
  const css01 = {
    textAlign: 'center',
    boarderCollapse: 'collapse',
  }

  return (
    <div className="App">
      <h2>로그인</h2>
      <div style={css01} className="d01">aaa</div>
      <button>확인</button>
    </div>
  );
}

export default App;
