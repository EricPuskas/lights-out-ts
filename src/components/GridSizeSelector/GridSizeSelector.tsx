import React from 'react';

/**
 * Imports styles components
 */
import { Container, Button } from './GridSizeSelector.styled';

/**
 * Imports hooks
 */
import { useGame } from '../../hooks';

/**
 * Displays the component
 */
export const GridSizeSelector: React.FC = () => {
  const { changeGridSize, gridSize, winner } = useGame();

  const GridSize = [
    { value: 3, label: '3x3' },
    { value: 5, label: '5x5' },
    { value: 9, label: '9x9' },
  ];

  if (winner) return null;
  return (
    <Container>
      {GridSize.map((size) => (
        <Button
          key={size.label}
          active={size.value === gridSize}
          onClick={() => {
            if (size.value !== gridSize) {
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
