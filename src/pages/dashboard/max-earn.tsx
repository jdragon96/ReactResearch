import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box, Stack, Card, CardContent, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import MovingIcon from '@mui/icons-material/Moving';
import { formatKoreanNumber } from '../../utilities/number';

export default function Page(): React.JSX.Element {

  const [earn, setEarn] = React.useState<number>(452300);

  return (
    <Card sx={{ height: '90px', background: "linear-gradient(90deg, #20aab5, #7b7fbe)", borderRadius: "16px" }}>
      <CardContent>
        <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
          <Stack direction="column">
            <Typography color="text.secondary" variant="h5" >
              {formatKoreanNumber(earn)}원
            </Typography>
            <Typography variant="overline">최대 수익금</Typography>
          </Stack>
          <Avatar sx={{ backgroundColor: 'var(--mui-palette-primary-main)', height: '56px', width: '56px'}}>
            <MovingIcon sx={{ width: 50, height: 50 }}/>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
}