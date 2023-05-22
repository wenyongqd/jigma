import React, { useState } from 'react';
import { RegisterScreen } from 'unauthenticated-app/register';
import { LoginScreen } from 'unauthenticated-app/login';
import { Button, Card } from 'antd';

export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false);
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card>
                {isRegister ? <RegisterScreen /> : <LoginScreen />}
                <Button onClick={() => setIsRegister(!isRegister)}>
                    switch to {isRegister ? 'login' : 'register'}
                </Button>
            </Card>
        </div>
    );
};
