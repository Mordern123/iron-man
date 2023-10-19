import './Ironman.css';
import Body from './components/Body';
import Head from './components/Head';
import Leg from './components/Leg';

const Ironman = () => {
  return (
    <div className="ironman">
      <Head></Head>
      <Body></Body>
      <Leg></Leg>
    </div>
  );
}

export default Ironman;
