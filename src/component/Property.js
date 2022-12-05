import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import {
  BathtubOutlined,
  Favorite,
  FavoriteBorder,
  SingleBedOutlined,
} from "@material-ui/icons";
function Property({property}) {
  const [favourite, setFavourite] = useState(false);
  return (
    <div>
      <Card sx={{ maxWidth: 300 }} style={{ margin: "15px" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="220"
          image={property.imageurl}
        />
        <CardContent>
          <Typography gutterBottom variant="span" component="div">
           ${property.rent}
            /month{" "}
          </Typography>
          <Typography variant="span" onClick={()=>{setFavourite(!favourite)}}>
              {favourite ? (
                <Favorite
                  style={{
                    border: "2px solid grey",
                    borderRadius: "100%",
                    padding: "2px",
                  }}
                />
              ) : (
                <FavoriteBorder
                  style={{
                    border: "2px solid grey",
                    borderRadius: "100%",
                    padding: "2px",
                  }}
                />
              )}
            </Typography>
          <Typography variant="h5">{property.title}</Typography>
          <Typography variant="body2" color="text.secondary">
           {property.address}
          </Typography>
          <hr />
          <Typography>
            <SingleBedOutlined />
            <span>{property.bed}</span>
            Beds
            <BathtubOutlined />
            <span>{property.bathrooms}</span>
            Bathrooms
            <span>{property.area}</span>X<span>3</span> m2
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Property;
