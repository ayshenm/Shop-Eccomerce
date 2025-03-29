import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const Product = ({ product }) => {
  // console.log("Məhsul məlumatı:", product);

  const { id, price, image, title } = product;
  const navigate = useNavigate();
  return (
    <Card className="p-3" id={id} sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <div
          style={{
            width: "100%",
            height: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{
              maxWidth: "100%",
              maxHeight: "100%", 
              objectFit: "contain",  
            }}
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Price: {price}₼
          </Typography>
          <CardActions>
            <Button
              onClick={() => navigate("/product-details/" + id)}
              size="small"
              color="secondary">
              Show More
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Product;
