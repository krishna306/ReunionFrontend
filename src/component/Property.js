import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import "./Property.css";
import {
  BathtubOutlined,
  Favorite,
  FavoriteBorder,
  SingleBedOutlined,
  CropOriginal,
} from "@material-ui/icons";
function Property({ property }) {
  const [favourite, setFavourite] = useState(false);
  return (
    <div>
      <Card sx={{ maxWidth: 300 }} className="style_to_card">
        <CardMedia
          component="img"
          alt="green iguana"
          height="220"
          image={property.imageurl}
        />
        <CardContent>
          <Typography
            className="top_text"
            gutterBottom
            variant="p"
            component="div"
          >
            <span className="special_content">${property.rent}</span>
            /month{" "}
            <Typography
              variant="span"
              onClick={() => {
                setFavourite(!favourite);
              }}
            >
              {favourite ? (
                <Favorite className="favourite_icons" />
              ) : (
                <FavoriteBorder className="favourite_icons" />
              )}
            </Typography>
          </Typography>
          <Typography variant="h5" gutterBottom>
            {property.title} <span>({property.propertytype.charAt(0).toUpperCase()+property.propertytype.slice(1)})</span>
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {property.address}
          </Typography>
          <hr />
          <Typography variant="p" className="bottom_text" gutterBottom>
            <SingleBedOutlined className="icons_style" />
            <span>{property.bed}</span> Beds
            <BathtubOutlined className="icons_style" />
            <span>{property.bathrooms}</span> Bathrooms
            <CropOriginal className="icons_style" />
            <span>{property.arealength}</span>X
            <span>{property.areabreadth}</span> m
            <span style={{ marginBottom: "20px" }}>2</span>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Property;
