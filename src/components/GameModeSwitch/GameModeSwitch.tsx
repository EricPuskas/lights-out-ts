import React from 'react';

/**
 * Import styles components
 */
import { Switch, Slider, Input, Container } from './GameModeSwitch.styled';

/**
 * Imports types
 */
import { GameModeSwitchProps } from './GameModeSwitch.types';

export const GameModeSwitch: React.FC<GameModeSwitchProps> = (props) => {
  const { changeGameMode, gameMode } = props;
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
