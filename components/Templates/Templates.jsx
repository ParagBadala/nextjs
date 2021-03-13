import React from "react";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Container } from "@material-ui/core";

import { useRouter } from 'next/router'
import { TemplateData } from "../../data/TemplateData";

const useStyles = makeStyles((theme) => ({
  cvName: {
    textAlign: "center",
    marginTop: "10px",
  },
  hover: {
    "&:hover": {
      transform: "scale(1.007)",
      boxShadow: " 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    },
  },
}));

export default function Templates() {
  const classes = useStyles();
  const router = useRouter();

  const navigateToTemplate = (route) => {
    router.push(route);
  };

  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={6}>
          {TemplateData.map((item, index) => (
            <Grid item sm xs={12}>
              <Box
                className={classes.hover}
                boxShadow={3}
                style={{ width: "15rem", height: "20rem" }}
                onClick={() => {navigateToTemplate(item.route)}}
              >
                <Image
                  src={item.img}
                  alt="template1"
                  width={240}
                  height={320}
                />
              </Box>
              <h3 className={classes.cvName}>{item.name}</h3>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
