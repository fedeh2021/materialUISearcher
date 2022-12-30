import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

const PaperInformation = (props) => {
  const { userState } = props;

  const { public_repos, followers, following } = userState;

  return (
    <Paper elevation={3}>
      <Stack>
        <Stack>
          <Typography>Respositories</Typography>
          <Typography>{public_repos}</Typography>
        </Stack>
        <Stack>
          <Typography>Followers</Typography>
          <Typography>{followers}</Typography>
        </Stack>
        <Stack>
          <Typography>Followings</Typography>
          <Typography>{following}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PaperInformation;
