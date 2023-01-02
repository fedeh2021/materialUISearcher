import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";

const LocationInformation = (props) => {
  const { userState } = props;

  const { location, twitter_username, blog, company } = userState;

  return (
    <Grid container>
      <Grid item xs={6}>
        <Stack>
          <LocationOnIcon />
          {location !== null ? (
            <Typography>{location}</Typography>
          ) : (
            <Typography>No disponible</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <TwitterIcon />
          {twitter_username !== null ? (
            <Typography>@{twitter_username}</Typography>
          ) : (
            <Typography>No disponible</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <LanguageIcon />
          {blog !== "" ? (
            <Typography>{blog}</Typography>
          ) : (
            <Typography>No disponible</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <BusinessIcon></BusinessIcon>
          <Typography>{company}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LocationInformation;
