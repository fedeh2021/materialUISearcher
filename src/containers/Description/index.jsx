import { Stack, Typography } from "@mui/material";
import React from "react";
import PaperInformation from "../../components/PaperInformation";

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;

  return (
    <>
      <Stack>
        <Typography>
          {!bio
            ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur voluptatibus deserunt quae aliquid quasi?"
            : bio}
        </Typography>
      </Stack>
      <PaperInformation userState={userState}/>
      {/* <LocationInformation /> */}
    </>
  );
};

export default Description;
