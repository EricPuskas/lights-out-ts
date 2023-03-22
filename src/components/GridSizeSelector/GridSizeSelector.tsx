import React from 'react';
import { GridSizeSelectorProps } from './GridSizeSelector.types';
import { Container, Button } from './GridSizeSelector.styled';

export const GridSizeSelector: React.FC<GridSizeSelectorProps> = (props) => {
  const { changeGridSize, activeSize } = props;

  const GridSize = [
    { value: 3, label: '3x3' },
    { value: 5, label: '5x5' },
    { value: 9, label: '9x9' },
  ];

  return (
    <Container>
      {GridSize.map((size) => (
        <Button
          key={size.label}
          active={size.value === activeSize}
          onClick={() => {
            if (size.value !== activeSize) {
              changeGridSize(size.value);
            }
          }}
        >
          {size.label}
        </Button>
      ))}
    </Container>
  );
};
