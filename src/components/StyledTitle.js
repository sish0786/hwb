import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const MainText = styled(Typography)({
  position: 'relative',
  fontSize: '48px',
  color: '#165A4A',
  fontWeight: 'bold',
  display: 'inline-block',
});

const ShadowText = styled(Typography)({
  position: 'absolute',
  top: 0,
  fontSize: '36px',
  left: 0,
  fontStyle: 'italic',
  letterSpacing: 2,
  color: 'rgba(44, 92, 72, 0.2)',
  transform: 'translate(80px, 30px)',
  fontWeight: 'bold',
});

const StyledTitle = ({title}) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <MainText>{title}</MainText>
      <ShadowText>{title}</ShadowText>
    </div>
  );
};

export default StyledTitle;
