/**
 * Imports font awesome
 */
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from './IconHints.styles';
import { useGame } from '../../hooks';
import { useState } from 'react';

export const IconHints: React.FC = () => {
  const { helperOn, setHelperOn } = useGame();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setHelperOn(!helperOn);
  };
  return (
    <Container onClick={handleClick}>
      <FontAwesomeIcon icon={faStar} color={!isClicked ? 'red' : ' '} />
    </Container>
  );
};
