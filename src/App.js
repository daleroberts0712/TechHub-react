import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import Showcase from './components/Showcase';
import Offers from './components/Offers';
import Services from './components/Services';
import Sellers from './components/Sellers';
import Categories from './components/Categories';
import Price from './components/Price';
import Sale from './components/Sale';
import Specials from './components/Specials';
import Newsletter from './components/Newsletter';
import Help from './components/Help';
import Additionals from './components/Additionals';
import Payment from './components/Payment';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <Showcase />
      <Offers />
      <Services />
      <Sellers />
      <Categories />
      <Price />
      <Sale />
      <Specials />
      <Newsletter />
      <Help />
      <Additionals />
      <Payment />
      <Footer />
    </div>
  );
}

export default App;
