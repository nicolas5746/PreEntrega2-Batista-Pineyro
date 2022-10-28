import React from 'react';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './ItemCount.sass';

const ItemCount = ({ addToCart, stock }) => {
    const [itemCount, setItemCount] = React.useState(0)

    const handleSum = () => {
        if (itemCount < stock) {
            setItemCount(itemCount + 1);
        }
    }

    const handleSubtraction = () => {
        setItemCount(Math.max(itemCount - 1, 0));
    }

    return (
        <div className='button'>
            <ButtonGroup>
                <Button variant='contained'
                    onClick={handleSubtraction}
                >
                    {' '}
                    <RemoveIcon fontSize='smaller' />
                </Button>
                <Button variant='outlined' fontSize='smaller'>{addToCart}</Button>
                <Button variant='contained'
                    onClick={handleSum}
                >
                    {' '}
                    <AddIcon fontSize='smaller' />
                </Button>
            </ButtonGroup>
            <Badge color='primary' badgeContent={itemCount}>
                <IconButton color='primary' aria-label='add to cart'>
                    <AddShoppingCartIcon />
                </IconButton>
            </Badge>
        </div>
    );
}

export default ItemCount;