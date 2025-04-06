import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box, Stack, Card, CardContent, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import CurrencyDollarIcon from '@mui/icons-material/CurrencyBitcoinTwoTone';

export default function Page(): React.JSX.Element {

  const [earnRate, setEarnRate] = React.useState<number>(99.8);

  return (
    <Card sx={{ height: '90px', background: "linear-gradient(90deg, #c38106, #f3d41a)", borderRadius: "16px" }}>
      <CardContent>
        <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
          <Stack direction="column">
            <Typography color="text.secondary" variant="h5" >
              {earnRate}%
            </Typography>
            <Typography variant="overline">전체 수익률</Typography>
          </Stack>
          <Avatar sx={{ backgroundColor: 'var(--mui-palette-primary-main)', height: '56px', width: '56px'}}>
            <CurrencyDollarIcon sx={{ width: 50, height: 50 }}/>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
}