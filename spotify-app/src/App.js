import './App.css';
import ThePowerOfPre from './ThePowerOfPre';
import ConnectWithMusicCulture from './ConnectWithMusicCulture';
import PickYourPremium from './PickYourPremium';
import Question from './Question';
import Footer from './Footer';
import Header from './Header';
import { UpperNav } from './UpperNav';
function App() {
  return (
    <div className="App">
      <UpperNav />
      <Header />
      <ThePowerOfPre />

      <ConnectWithMusicCulture />

      <PickYourPremium />
      <Question />
      <Footer />

    </div>
  );
}

export default App;
