import { Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";

const LocationInformation = (props) => {
  const { userState } = props;

  const { location, twitter_username, blog, company } = userState;

  return (
    <Grid container spacing={2} sx={{marginTop: '15px'}}>
      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <LocationOnIcon />
          {location !== null ? (
            <Typography>{location}</Typography>
          ) : (
            <Typography>No disponible</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
         <Link href={`https://twitter.com/${twitter_username}`} target='_blank' rel="noreferrer" underline="hover">
          <TwitterIcon />
          {twitter_username !== null ? (
            <Typography>@{twitter_username}</Typography>
          ) : (
            <Typography>No disponible</Typography>
          )}
          </Link>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <LanguageIcon />
          {blog !== "" ? (
            <a target='_blank' href={blog}><Typography>{blog}</Typography></a>
          ) : (
            <Typography>No disponible</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <BusinessIcon></BusinessIcon>
          <Typography>{company}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LocationInformation;
