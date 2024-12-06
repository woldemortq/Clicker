import { useEffect, useState } from "react";
import carrot from "../../images/carrot.png";
import Items from "../itemsCarrotClicker/items";
import './carrot.css';

function Carrot() {
    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem('carrotCount');
        return savedCount ? parseInt(savedCount, 10) : 0;
    });

    const [coinPerSecond, setCoinPerSecond] = useState(1);

    useEffect(() => {
        localStorage.setItem('carrotCount', count);
    }, [count]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCoins => prevCoins + coinPerSecond);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [coinPerSecond]);

    const handleBuy = (price, properties) => {
        if (count >= price) {
            setCount(prevCount => prevCount - price);
            setCoinPerSecond(prevCoins => prevCoins + properties - 1); // Добавляем properties к coinPerSecond
            alert('Приобретено улучшение!');
        } else {
            alert('Недостаточно средств!');
        }
    };

    return (
        <>
            <div className="container">
                <h1>{count} carrot coin</h1>
                <img className="carrot" onClick={() => setCount(count + 1)} src={carrot} alt="carrot" />
            </div>
            <Items
                name='Started click'
                properties={5}
                price={100}
                onBuy={(price) => handleBuy(price, 5)} // Передаем properties
            />
            <Items
                name='Overclick'
                properties={150}
                price={3000}
                onBuy={(price) => handleBuy(price, 150)} // Передаем properties
            />
            <Items
                name='Multitap'
                properties={1000}
                price={30000}
                onBuy={(price) => handleBuy(price, 1000)} // Передаем properties
            />
            <Items
                name='Mega clicker'
                properties={5000}
                price={100000}
                onBuy={(price) => handleBuy(price, 5000)} // Передаем properties
            />
            <Items
                name='Ultra clicker'
                properties={10000}
                price={300000}
                onBuy={(price) => handleBuy(price, 10000)} // Передаем properties
            />
            <Items
                name='God Mode'
                properties={150}
                price={500000}
                onBuy={(price) => handleBuy(price, 150)} // Передаем properties
            />
        </>
    );
}

export default Carrot;
