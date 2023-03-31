import React from 'react';

/**
 * Import styles components
 */
import { Switch, Slider, Input, Container } from './GameModeSwitch.styled';

/**
 * Imports hooks
 */
import { useGame } from '../../hooks';

/**
 * Displays the component
 */
export const GameModeSwitch: React.FC = () => {
  const { changeGameMode, gameMode } = useGame();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeGameMode(e.target.checked);
  };

  return (
    <Container>
      <Switch>
        <Input
          type="checkbox"
          checked={gameMode === 'lights-on'}
          onChange={handleChange}
        />

        <Slider className="slider" />
      </Switch>
    </Container>
  );
};
