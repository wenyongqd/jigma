import React from 'react';
import { ProjectListScreen } from 'screens/project-list';
import { useAuth } from 'context/auth-context';
import { Button } from 'antd';

export const AuthenticatedApp = () => {
    const { logout } = useAuth();
    return (
        <div>
            <Button onClick={logout}>Log out</Button>
            <ProjectListScreen />
        </div>
    );
};
