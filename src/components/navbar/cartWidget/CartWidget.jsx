import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.sass';

const CartWidget = ({ itemCount }) => {
    let cartStyle = { color: 'gainsboro' };
    return (
        <div className='cartWidget'>
            <Link to={`/cart`}>
                <Badge color='error' badgeContent={itemCount}>
                    <IconButton style={cartStyle} aria-label='add to cart'>
                        <ShoppingCartIcon style={cartStyle} />
                    </IconButton>
                </Badge>
            </Link>
        </div >
    );
}

export default CartWidget;