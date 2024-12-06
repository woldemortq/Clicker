import './items.css'

function Items(props) {
    // eslint-disable-next-line react/prop-types
    const {name, properties, price, onBuy} = props

    const handleBuy = () => {
        if(onBuy) {
            onBuy(price)
        }
    }
  return (
    <>
      <div className="shop-items"onClick={handleBuy}>
        <h2>{name}</h2>
        <span>{properties}</span>
        <p>price: {price}</p>
      </div>
    </>
  );
}
export default Items;
