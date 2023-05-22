import React from 'react';
import { User } from './search-panel';
import { Table } from 'antd';

interface Project {
    id: string;
    name: string;
    personId: string;
    pin: boolean;
    organization: string;
}

interface ListProps {
    list: Project[];
    users: User[];
}
export const List = ({ users, list }: ListProps) => {
    return (
        <Table
            pagination={false}
            columns={[
                {
                    title: 'Name',
                    sorter: (a, b) => a.name.localeCompare(b.name),
                    render(value, project) {
                        return project.name;
                    },
                },
                {
                    title: 'Assignee',
                    render(value, project) {
                        return (
                            users.find((user) => user.id === project.personId)
                                ?.name || 'unknown'
                        );
                    },
                },
            ]}
            dataSource={list.map((project) => ({
                ...project,
                key: project.id,
            }))}
        />
    );
};
