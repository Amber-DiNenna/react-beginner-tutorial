// import logo from './logo.svg';
import './App.css';
// import Hello from './components/Hello';
// import Message from './components/Message';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      {/* <Hello />
      <Message /> */}
      <Profile name='Amber' lastname='DiNenna'>
        <h3>This is adding a child html element to the Profile component.</h3>
      </Profile>

    </div>
  );
}

export default App;
