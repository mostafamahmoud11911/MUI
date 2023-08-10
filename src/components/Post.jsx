import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import work from '../../public//work-6.jpg'
import React from "react";

export default function Post() {
  return (
    <Card sx={{margin: 5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Muller"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image={work}
        alt="Paella dish"
        sx={{objectFit:'contain'}}
      />
      <CardContent>
        <Typography variant="body2" color="text">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            sx={{ color: "#f00" }}
            icon={<FavoriteBorder sx={{ color: "#f00" }} />}
            checkedIcon={<Favorite sx={{ color: "#f00" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
