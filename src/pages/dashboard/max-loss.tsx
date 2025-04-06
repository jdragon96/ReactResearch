import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box, Stack, Card, CardContent, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { formatKoreanNumber } from '../../utilities/number';

export default function Page(): React.JSX.Element {

  const [loss, setLoss] = React.useState<number>(674387000);

  return (
    <Card sx={{ height: '90px', background: "linear-gradient(90deg, #eb5497, #e24dc5)", borderRadius: "16px" }}>
      <CardContent>
        <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
          <Stack direction="column">
            <Typography color="text.secondary" variant="h5" >
              {formatKoreanNumber(loss)}원
            </Typography>
            <Typography variant="overline">최대 손실액</Typography>
          </Stack>
          <Avatar sx={{ backgroundColor: 'var(--mui-palette-primary-main)', height: '56px', width: '56px'}}>
            <TrendingDownIcon sx={{ width: 50, height: 50 }}/>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
}