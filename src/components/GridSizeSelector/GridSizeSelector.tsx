import React from 'react';
import { GridSizeProps } from './GridSizeSelector.types';
import { Container, Button } from './GridSizeSelector.styled';

export const GridSizeSelector: React.FC<GridSizeProps> = (props) => {
  const { changeGridSize, activeSize } = props;

  const GridSize = [
    { value: 3, label: '3x3' },
    { value: 5, label: '5x5' },
    { value: 9, label: '9x9' },
  ];

  return (
    <Container>
      <div className="grid-size-selector">
        {GridSize.map((size) => (
          <Button
            key={size.label}
            className={size.value === activeSize ? 'active' : ''}
            onClick={() => {
              if (size.value !== activeSize) {
                changeGridSize(size.value);
              }
            }}
          >
            {size.label}
          </Button>
        ))}
      </div>
    </Container>
  );
};
