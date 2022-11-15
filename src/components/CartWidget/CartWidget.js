import cart from '../../assets/img/cart.svg';

function CartWidget() {
    return (
        <div className='cartWidget'>
            <img src={cart}></img>
            <span>1</span>
        </div>
        
    )
}

export default CartWidget