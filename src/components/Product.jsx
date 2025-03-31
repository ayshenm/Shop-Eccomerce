import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
  Button,
  Grid,
} from "@mui/material";

const Product = ({ product }) => {
  // console.log("Məhsul məlumatı:", product);

  const { id, price, image, title } = product;
  const navigate = useNavigate();
  return (
    <Grid item xs={12} sm={6} md={2}>
      <Card sx={{ width: 280 }}>
        <div className="p-5">
          <CardMedia
            sx={{
              height: 140,
              width: "100%",
              objectFit: "contain",
              backgroundSize: "contain",
            }}
            image={image}
            title={title}
          />
        </div>
        <CardContent sx={{ height: 150, padding: 3 }}>
          <Typography sx={{ fontSize: "1rem" }} gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.primary", fontWeight:900,fontSize:"1rem"}}>
            {price}₼
          </Typography>
        </CardContent>
        <CardActions sx={{ height: 50 }}>
          <Button onClick={() => navigate("/product-details/" + id)} size="sm" variant="contained" color="error">
            Show More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
