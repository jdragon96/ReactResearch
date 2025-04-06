import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box, Stack, Card, CardContent, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import DialpadIcon from '@mui/icons-material/Dialpad';

export default function Page(): React.JSX.Element {

  const [tradeCount, setTradeCount] = React.useState<number>(1034);

  return (
    <Card sx={{ height: '90px', background: "linear-gradient(90deg, #545dd6, #746db0)", borderRadius: "16px" }}>
      <CardContent>
        <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
          <Stack direction="column">
            <Typography color="text.secondary" variant="h5" >
              {tradeCount}회
            </Typography>
            <Typography variant="overline">거래 횟수</Typography>
          </Stack>
          <Avatar sx={{ backgroundColor: 'var(--mui-palette-primary-main)', height: '56px', width: '56px'}}>
            <DialpadIcon sx={{ width: 50, height: 50 }}/>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
}