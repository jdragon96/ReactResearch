import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box, Stack, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import EarnRate from "./earn-rate";
import TradeCount from "./trade-count"
import MaxEarn from "./max-earn";
import MaxLoss from "./max-loss";
import EarnRateRank from "./earn-rate-rank";
import EarnRank from "./earn-rank";
import Goal from "./goal";

export default function Dashboard() {
  return (
    <>
      <Box sx={{ p: 2, minHeight: '100vh', background: 'linear-gradient(45deg, #121d3b 0%, #863f5f 35%, #863f5f 65%, #121d3b 100%)' }}>
        <Grid container direction={"column"} spacing={1}>
          <Grid container spacing={1}>
            <Grid size={{lg: 3, sm: 6, xs: 12}}>
              <EarnRate/>
            </Grid> 
            <Grid size={{lg: 3, sm: 6, xs: 12}}>
              <TradeCount/>
            </Grid>
            <Grid size={{lg: 3, sm: 6, xs: 12}}>
              <MaxEarn/>
            </Grid> 
            <Grid size={{lg: 3, sm: 6, xs: 12}}>
              <MaxLoss/>
            </Grid> 
          </Grid>
          <Grid container spacing={1}>
            <Grid size={{lg: 6, sm: 12}}>
              <EarnRateRank/>
            </Grid> 
            <Grid size={{lg: 6, sm: 12}}>
              <EarnRank/>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid size={{lg: 3, sm: 12}}>
              <Goal/>
            </Grid> 
          </Grid>
        </Grid> 
      </Box>
    </>
  );
}