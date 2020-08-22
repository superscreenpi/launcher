import React from 'react';
import { useGlobal } from '../store';
import { Container } from '../components/Container';
import { Box } from '../components/Box';
import { Link } from 'react-router-dom';
import { TextField } from '../components/TextField';
import { useDispatch } from 'react-redux';
import { setSetting } from '../store/settings/actions';

export const SettingsView: React.FC = () => {
  const { deviceName } = useGlobal((state) => state.settings);
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <Link to="/" className="round button">
          <i className="fas fa-arrow-left" />
        </Link>
      </Container>
      <Container>
        <Box>
          <TextField
            icon="user-tag"
            label="Device Name"
            value={deviceName}
            onChange={(name): void => {
              dispatch(setSetting('deviceName', name));
            }}
          />
        </Box>
      </Container>
      <Container>
        <Box>
          <Link to="/settings/about" className="field">
            <label>
              <i className="fas fa-question-circle" />
              About
            </label>
          </Link>
        </Box>
      </Container>
    </>
  );
};
