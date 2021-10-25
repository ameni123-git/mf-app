import './App.css';
import Header from './components/header/Header';
import Social from "./components/social/Social";
import Button from "./components/button/Button";
import illustration from "./assets/undraw_Online_learning_re_qw08.svg";

function App() {
  return (
    <div className="app">
      <div className="firstpart">
        <div className="container">
          {/* menu et logo  */}
          <Header />
          <div className="firstpart__content">
            {/* social media icons  */}
            <Social />
            <div>
              
              <h1>learn without limits</h1>
              <p>
                Maecenas sed dolor lorem. Maecenas quis congue turpis. Proin a
                ipsum dictum.
              </p>
              <Button text="start your training" />
            </div>
            <img src={illustration} alt="ullustration" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
