import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon/>
        </button>

        <ProfileInfo>
          <strong>Alquipo Neto</strong>
          <span>5645 Tweets</span>
        </ProfileInfo>

        {/* <ProfilePage /> */}

        {/* <BottonMenu>
          <HomeIcon/>
          <SearchIcon/>
          <BellIcon/>
          <EmailIcon/>
        </BottonMenu> */}
      </Header>
    </Container>
  );
}

export default Main;
