import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import pic from '../../public/pic.jpg';
import post from '../../public/post-2.jpg';
import work3 from '../../public/work-3.jpg';
import work2 from '../../public/work-2.jpg';

export default function Rightbar() {
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        <Typography variant="h6" sx={{ fontWeight: 100 }}>
          Online friends
        </Typography>

        <AvatarGroup max={7} sx={{width: 260}}>
          <Avatar alt="Remy Sharp" src={pic} />
          <Avatar alt="Travis Howard" src="" />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Travis Howard" src="" />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Trevor Henderson" src="" />
        </AvatarGroup>

        <Typography variant="h6" sx={{ fontWeight: 100 }}>
          Latest Photos
        </Typography>
        <ImageList cols={3}>
          <ImageListItem>
            <img src={post} />
          </ImageListItem>
          <ImageListItem>
            <img src={work3} />
          </ImageListItem>
          <ImageListItem>
            <img src={work2} />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" sx={{ fontWeight: 100 }}>
          Latest Converstion
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar>
B
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Brunch this weekend" secondary="Jan 9, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
S
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Summer BBQ" secondary="Jan 7, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                O
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Oui Oui" secondary="July 20, 2014" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
