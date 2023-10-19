import './Body.css';
import Heart from './Heart';
import Laser from './Laser';

const Body = () => {
    return (
        <div className="body">
            <div className="trunk"></div>
            <div className="shoulder-outline-left"></div>
            <div className="shoulder-outline-right"></div>
            <div className="shoulder shoulder-left">
                <div className="screw"></div>
            </div>
            <div className="shoulder shoulder-right">
                <div className="screw"></div>
            </div>
            <div className="arm-left"></div>
            <div className="hand-left">
                <div className="finger finger-1"></div>
                <div className="finger finger-2"></div>
                <div className="finger finger-3"></div>
                <div className="finger finger-4"></div>
                <div className="finger finger-5"></div>
            </div>
            <div className="arm-right"></div>
            <div className="hand-right">
                <Laser></Laser>
            </div>
            <Heart></Heart>
        </div>
    );
}

export default Body;
