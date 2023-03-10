import { Stack, Typography } from "@mui/material";
import React from "react";
import PaperInformation from "../../components/PaperInformation";
import LocationInformation from "../../components/LocationInformation";

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;

  return (
    <>
      <Stack sx={{ justifyContent: "center" }}>
        <Typography variant="body1">
          {!bio
            ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur voluptatibus deserunt quae aliquid quasi?"
            : bio}
        </Typography>
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </>
  );
};

export default Description;
