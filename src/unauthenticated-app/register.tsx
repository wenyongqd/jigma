import { useAuth } from '../context/auth-context';
import React from 'react';
import { Button, Form, Input } from 'antd';

export const RegisterScreen = () => {
    const { register } = useAuth();

    const handleSubmit = async (values: {
        username: string;
        password: string;
    }) => {
        try {
            await register(values);
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
                <Input
                    size={'large'}
                    placeholder={'Username'}
                    type="text"
                    id={'username'}
                    style={{ borderRadius: '8px' }}
                />
            </Form.Item>
            <Form.Item
                name={'password'}
                rules={[{ required: true, message: 'Please input password' }]}
            >
                <Input
                    size={'large'}
                    placeholder={'Password'}
                    type="password"
                    id={'password'}
                    style={{ borderRadius: '8px' }}
                />
            </Form.Item>
            <Form.Item>
                <Button
                    size={'large'}
                    htmlType={'submit'}
                    style={{ borderRadius: '8px' }}
                >
                    register
                </Button>
            </Form.Item>
        </Form>
    );
};
