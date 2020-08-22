import React from 'react';
import { Container } from '../../components/Container';
import { Box } from '../../components/Box';
import { version } from '../../../package.json';
import { Link } from 'react-router-dom';
import preval from 'preval.macro';

const buildTime = preval`module.exports = new Date().toLocaleString();`;

export const AboutView: React.FC = () => {
  return (
    <>
      <Container>
        <Link to="/settings" className="round button">
          <i className="fas fa-arrow-left" />
        </Link>
      </Container>
      <Container>
        <Box>
          <div className="field">
            <label>
              <i className="fas fa-code-branch" />
              SuperScreenPi Launcher v{version}
            </label>
          </div>
          <div className="field">
            <label>
              <i className="fas fa-calendar" />
              Release {buildTime}
            </label>
          </div>
          <div className="field">
            <label>
              <i className="fab fa-react" />
              React v{React.version}
            </label>
          </div>
        </Box>
      </Container>
    </>
  );
};
