import { NavLink } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import './index.css';

const ProductList = ({ productData }) => {
  const { title, price, brand, images, rating, id } = productData;

  return (
    <NavLink to={`/products/${id}`} className="link-item">
      <Card className="product-card" elevation={4}>
      <CardMedia
        component="img"
        height="200"
        image={images[0]}
        alt={title}
        loading="lazy"
        className="product-image"
        />
        <CardContent>
          <Typography variant="h6" className="product-title" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="product-brand">
            by {brand}
          </Typography>
          <Box className="product-details">
            <Typography variant="subtitle1" className="product-price">
              ₹{price}
            </Typography>
            <Box className="rating-container">
              <Typography className="rating">{rating}</Typography>
              <StarIcon className="star" />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </NavLink>
  );
};

export default ProductList;
