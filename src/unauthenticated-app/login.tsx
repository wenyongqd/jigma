import { useAuth } from '../context/auth-context';
import React from 'react';
import { Button, Form, Input } from 'antd';
import styled from '@emotion/styled';

export const LoginScreen = () => {
    const { login } = useAuth();

    const handleSubmit = async (values: {
        username: string;
        password: string;
    }) => {
        try {
            await login(values);
        } catch (error: any) {
            console.log('Failed to login:', error);
        }
    };

    return (
        <Form onFinish={handleSubmit}>
            <Form.Item
                name={'username'}
                rules={[{ required: true, message: 'Please input username' }]}
            >
                <RoundInput
                    size={'large'}
                    placeholder={'Username'}
                    type="text"
                    id={'username'}
                />
            </Form.Item>
            <Form.Item
                name={'password'}
                rules={[{ required: true, message: 'Please input password' }]}
            >
                <PasswordInput
                    size={'large'}
                    placeholder={'Password'}
                    type="password"
                    id={'password'}
                />
            </Form.Item>
            <Form.Item>
                <StyledButton
                    size={'large'}
                    htmlType={'submit'}
                    style={{ borderRadius: '8px' }}
                >
                    login
                </StyledButton>
            </Form.Item>
        </Form>
    );
};

const RoundInput = styled(Input)`
    border-radius: 12px;
    width: 27rem;
    border-color: #262626 !important;
    box-shadow: none !important;
    :hover {
        border: 1px solid #262626 !important;
        outline: 1px solid #262626 !important;
        box-shadow: none !important;
        transition: none !important;
    }
`;

const PasswordInput = styled(Input.Password)`
    border-radius: 12px;
    width: 27rem;
    border-color: #262626 !important;
    box-shadow: none !important;
    :hover {
        border: 1px solid #262626 !important;
        outline: 1px solid #262626 !important;
        box-shadow: none !important;
        transition: none !important;
    }
`;

const StyledButton = styled(Button)`
    border-radius: 12px;
    color: white;
    width: 27rem;
    font-weight: bold;
    background-color: #262626;
    border-color: #262626;

    :hover {
        background-color: #e4dfd9;
        border-color: #e4dfd9 !important;
        color: white !important;
    }
    box-shadow: none;
`;
