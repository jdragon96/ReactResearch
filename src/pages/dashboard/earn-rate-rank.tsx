import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box, Stack, Card, CardContent, Avatar, Button, IconButton, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { TopDownBarChart } from '../../components/chart/TopDownBarChart';


const data = [
  { label: "한국항공우주산업", value: 25 },
  { label: "한화 에어로스페이스", value: 20 },
  { label: "삼성전자", value: 15 },
  { label: "NC소프트", value: 10 },
  { label: "닌텐도", value: 5 },
];


export default function Page(): React.JSX.Element {

  const [loss, setLoss] = React.useState<number>(674387000);

  return (
    <Card sx={{ 
      height: '260px', 
      background: "linear-gradient(90deg, #eb5497, #e24dc5)", 
      borderRadius: "16px", 
      overflow: 'hidden'
    }}>
      <Box sx={{ 
        height: "40px", 
        width: "100%", 
        background: "#392946" 
      }}>
        <Stack direction={"row"} alignItems="center">
          <Avatar sx={{ backgroundColor: 'var(--mui-palette-text-primary)'}}>
            <AttachMoneyIcon />
          </Avatar>
          <Typography sx={{width: "100%"}}>수익률 순위</Typography>
          <IconButton sx={{width: "60px", color: "var(--mui-palette-primary-main)", borderRadius: '0px'}}>
            <AddIcon />
          </IconButton>
          <IconButton sx={{width: "60px", color: "var(--mui-palette-primary-main)", borderRadius: '0px'}}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </Box>
      <CardContent sx={{ padding: 2, background: "linear-gradient(90deg, #39203dDD, #331e3fDD)", height: "100%" }}>
        <Box sx={{width: "100%"}}>
          <TopDownBarChart data={data} textPadding={130} rightTextPadding={150} barColor='#359bb2' barHeight={30} fontSize='14px'/>
        </Box>
      </CardContent>
    </Card>
  );
}