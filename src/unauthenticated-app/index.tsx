import React, { useState } from 'react';
import { RegisterScreen } from 'unauthenticated-app/register';
import { LoginScreen } from 'unauthenticated-app/login';
import { Button, Card, Divider } from 'antd';
import backgroundImage from 'assets/backgroundImage.svg';
import waveDecoration from 'assets/waveDecoration.png';
import SoftwareLogo from 'assets/logo.png';
import styled from '@emotion/styled';

export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false);
    return (
        <AppContainer>
            <StyledWaveImg
                src={waveDecoration}
                alt="Wave decoration at the bottom of the page"
            />
            <BackgroundImageContainer>
                <img
                    src={backgroundImage}
                    alt="Abstract design for background"
                />
            </BackgroundImageContainer>
            <AuthContainer>
                <AuthCard>
                    <Title>
                        {isRegister ? 'Sign up to' : 'Sign in to'}
                        <img
                            src={SoftwareLogo}
                            style={{ scale: '80%' }}
                            alt="Logo of the software"
                        />
                    </Title>
                    {isRegister ? <RegisterScreen /> : <LoginScreen />}
                    <Divider />
                    <Button
                        size={'large'}
                        type={'link'}
                        onClick={() => setIsRegister(!isRegister)}
                        style={{ color: '#262626' }}
                    >
                        {isRegister
                            ? 'Have an account？Please sign in'
                            : 'New to Jira？Create an account.'}
                    </Button>
                </AuthCard>
            </AuthContainer>
        </AppContainer>
    );
};

const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-gap: 7rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 7rem;
        padding: 0 2rem;
    }
`;

const StyledWaveImg = styled.img`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100%;
    z-index: -1;
`;

const BackgroundImageContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 767px) {
        display: none;
    }
`;

const AuthContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding: 2rem;
`;

const AuthCard = styled(Card)`
    width: 100%;
    max-width: 49rem;
    min-height: 66rem;
    padding: 3.2rem 4rem;
    border-radius: 3rem;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
    text-align: center;
    align-items: center;
    margin: 0 auto;
`;

const Title = styled.h2`
    margin-bottom: 2.4rem;
    color: rgb(94, 108, 132);
    font-size: 2rem;
`;
