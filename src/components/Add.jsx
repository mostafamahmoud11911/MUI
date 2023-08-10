import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoodIcon from "@mui/icons-material/Mood";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DateRangeIcon from "@mui/icons-material/DateRange";
import React, { useState } from "react";
import styled from "@emotion/styled";

const ModalStyles = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

export default function Add({mode}) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: "30px",
          left: { md: "50px", xs: "50%" },
        }}
        onClick={() => setOpenMenu(true)}
      >
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </Tooltip>

      <ModalStyles
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        bgcolor={"Background"}
      >
        <Box width={400} minHeight={280} p={3} borderRadius={2} bgcolor={mode === 'dark' ? 'black' : 'white'}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar alt="Remy Sharp" src="/public/testimonial-2.jpg" />
            <Typography>John</Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="what's on your mind?"
            variant="standard"
            sx={{ width: "100%" }}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <MoodIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
          >
            <Button>Post</Button>
            <Button sx={{width: '100px'}}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </ModalStyles>
    </>
  );
}
