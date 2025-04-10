import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../header";
import Footer from "../footer";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Rating,
  Grid
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    storedData: null,
    errorMessage: null,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        if (response.status === 200) {
          setData({ storedData: response.data, errorMessage: null });
        } else {
          setData({
            storedData: null,
            errorMessage: "Request failed with status " + response.status,
          });
        }
      } catch (error) {
        setData({ storedData: null, errorMessage: error.message });
      }
    };

    fetchProduct();
  }, [id]);

  const { storedData, errorMessage } = data;

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <Box>
      <Header />
      {errorMessage && (
        <Typography color="error" sx={{ textAlign: "center", mt: 4 }}>
          {errorMessage}
        </Typography>
      )}

      {storedData && (
        <Grid
          container
          spacing={4}
          sx={{ px: { xs: 2, md: 6 }, py: 4 }}
          justifyContent="center"
        >
          {/* Carousel Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ width: "100%", maxWidth: 600, margin: "0 auto" }}>
              <Slider {...carouselSettings}>
                {storedData.images.map((img, index) => (
                  <Box key={index}>
                    <img
                      src={img}
                      alt={`${storedData.title} ${index + 1}`}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "500px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </Box>
                ))}
              </Slider>
            </Box>
          </Grid>

          {/* Product Details Section */}
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ p: { xs: 2, sm: 3 } }}>
              <CardContent>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" } }}
                >
                  {storedData.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {storedData.description}
                </Typography>

                <Typography variant="h6" sx={{ mt: 2 }}>
                  ₹{storedData.price}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <Rating
                    value={parseFloat(storedData.rating)}
                    readOnly
                    precision={0.1}
                  />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    {storedData.rating}/5
                  </Typography>
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Chip
                    label={`Brand: ${storedData.brand}`}
                    sx={{ mr: 1 }}
                    color="secondary"
                  />
                  <Chip
                    label={`Category: ${storedData.category}`}
                    color="primary"
                  />
                </Box>

                <Typography
                  variant="body2"
                  sx={{ mt: 2, fontStyle: "italic" }}
                >
                  Only <strong>{storedData.stock}</strong> items left in stock!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
      <Footer/>
    </Box>
  );
};

export default ProductDetails;
