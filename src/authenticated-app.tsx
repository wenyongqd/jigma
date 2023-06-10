import React from 'react';
import { ProjectListScreen } from 'screens/project-list';
import { useAuth } from 'context/auth-context';
import { Button } from 'antd';
import styled from '@emotion/styled';
import { Row } from './components/lib';
import SoftwareLogo from 'assets/logo.png';

export const AuthenticatedApp = () => {
    const { logout } = useAuth();
    return (
        <Container>
            <Header between={true}>
                <HeaderLeft gap={true}>
                    <button
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <img
                            alt="HTMLru"
                            src={SoftwareLogo}
                            style={{ scale: '80%' }}
                        />
                    </button>
                    <h2>Projects</h2>
                    <h2>User</h2>
                </HeaderLeft>
                <HeaderRight>
                    <Button onClick={logout}>Log out</Button>
                </HeaderRight>
            </Header>
            <Main>
                <ProjectListScreen />
            </Main>
        </Container>
    );
};
const Container = styled.div`
    display: grid;
    grid-template-rows: 6rem 1fr 6rem;
    height: 100vh;
`;
const Header = styled(Row)`
    padding: 1.2rem;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
    z-index: 1;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main``;
