import React from 'react';
import { User } from './search-panel';

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
        <div>
            <table
                style={{
                    border: '1.5px solid rgb(200, 200, 200)',
                    margin: '0 auto',
                }}
            >
                <thead>
                    <tr>
                        <th>Project name</th>
                        <th>Assignee</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((project) => (
                        <tr key={project.id}>
                            <td
                                style={{
                                    border: '1px solid rgb(190, 190, 190)',
                                    backgroundColor: 'rgb(238, 238, 238)',
                                }}
                            >
                                {project.name}
                            </td>
                            <td
                                style={{
                                    border: '1px solid rgb(190, 190, 190)',
                                    backgroundColor: 'rgb(215, 217, 242)',
                                }}
                            >
                                {users.find(
                                    (user) => user.id === project.personId,
                                )?.name || 'Unknown'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
