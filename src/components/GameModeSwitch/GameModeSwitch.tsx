import React from 'react';
import { useGame } from '../../hooks';

/**
 * Import styles components
 */
import { Switch, Slider, Input, Container } from './GameModeSwitch.styled';

/**
 * Imports types
 */
// import { GameModeSwitchProps } from './GameModeSwitch.types';

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
