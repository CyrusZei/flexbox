import React, { Component } from 'react';
import styled from 'styled-components';

const RootContainer = styled.div`
  display: flex;
  background-color: #ff0000;
  height: 100vh;
  flex-direction: column;
`;

const TopNav = styled.div`
  background-color: #00ff00;
  height: 80px;
`;

const LeftNav = styled.div`
  width: 100px;
  background-color: #0000ff;
`;

const ContentContainer = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  display: flex;
`;

const MainContent = styled.div`
  flex: 1;
  background-color: #00ffff;
`;

class App extends Component {
  render() {
    return (
      <RootContainer>
        <TopNav>Top NavBar</TopNav>
        <ContentContainer>
          <LeftNav />
          <MainContent />
        </ContentContainer>
      </RootContainer>
    );
  }
}

export default App;
