import React from 'react';
import { User } from './search-panel';
import { Table } from 'antd';
import dayjs from 'dayjs';

interface Project {
    id: string;
    name: string;
    personId: string;
    pin: boolean;
    organization: string;
    created: number;
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
                    title: 'Team',
                    dataIndex: 'organization',
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
                {
                    title: 'Created date',
                    render(value, project) {
                        return (
                            <span>
                                {project.created
                                    ? dayjs(project.created).format(
                                          'YYYY-MM-DD',
                                      )
                                    : 'null'}
                            </span>
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
