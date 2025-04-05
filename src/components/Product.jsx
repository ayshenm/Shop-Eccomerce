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
    <Grid item xs={12} sm={6} md={3} lg={2}>
    <Card sx={{ width: "100%", maxWidth: 280, mx: "auto" }}>
      <div className="p-4 sm:p-5">
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
      <CardContent sx={{ height: "auto", minHeight: 130, padding: { xs: 2, sm: 3 } }}>
        <Typography
          sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
          gutterBottom
          variant="h6"
          component="div"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.primary", fontWeight: 900, fontSize: { xs: "0.875rem", sm: "1rem" } }}
        >
          {price}₼
        </Typography>
      </CardContent>
      <CardActions sx={{ height: "auto", paddingBottom: { xs: 2, sm: 3 } }}>
        <Button
          onClick={() => navigate("/product-details/" + id)}
          size="small"
          variant="contained"
          color="error"
          sx={{
            fontSize: { xs: "0.75rem", sm: "0.875rem" },
            width: "100%",
            maxWidth: 140,
            mx: "auto",
          }}
        >
          Show More
        </Button>
      </CardActions>
    </Card>
  </Grid>

  );
};

export default Product;
