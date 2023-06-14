import React from 'react';
import { ProjectListScreen } from 'screens/project-list';
import { useAuth } from 'context/auth-context';
import { Button, Dropdown, MenuProps } from 'antd';
import styled from '@emotion/styled';
import { Row } from './components/lib';
import SoftwareLogo from 'assets/logo.png';
import { PoweroffOutlined } from '@ant-design/icons';

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
                    <User />
                </HeaderRight>
            </Header>
            <Main>
                <ProjectListScreen />
            </Main>
        </Container>
    );
};

const User = () => {
    const { logout, user } = useAuth();

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Button
                    style={{ color: 'Black', fontWeight: '600px' }}
                    onClick={logout}
                    type={'link'}
                >
                    Logout
                </Button>
            ),
        },
    ];

    return (
        <Dropdown menu={{ items }}>
            <RoundButton
                icon={<PoweroffOutlined />}
                onClick={(e) => e.preventDefault()}
            >
                Hi, {user?.name}
            </RoundButton>
        </Dropdown>
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
const RoundButton = styled(Button)`
    border-radius: 12px;
    color: #f36805;
    font-weight: bold;
    border-color: #f36805;

    :hover {
        background-color: #f36805;
        border-color: #f36805 !important;
        color: white !important;
    }
    box-shadow: none;
`;
