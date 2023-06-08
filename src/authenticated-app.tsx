import React from 'react';
import { ProjectListScreen } from 'screens/project-list';
import { useAuth } from 'context/auth-context';
import { Button } from 'antd';
import styled from '@emotion/styled';
import { Row } from './components/lib';

export const AuthenticatedApp = () => {
    const { logout } = useAuth();
    return (
        <Container>
            <Header between={true}>
                <HeaderLeft gap={true}>
                    <h2>Logo</h2>
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
const Header = styled(Row)``;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main``;
