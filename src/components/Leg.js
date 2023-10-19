import Laser from './Laser';
import './Leg.css';

const Leg = () => {
    return (
        <div className="leg">
            <div className="thigh"></div>
            <div className="calf calf-left">
                <Laser></Laser>
                <div className="structure"></div>
            </div>
            <div className="calf calf-right">
                <Laser></Laser>
                <div className="structure"></div>
            </div>
        </div>
    );
}

export default Leg;
