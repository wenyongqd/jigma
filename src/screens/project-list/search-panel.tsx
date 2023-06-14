import React from 'react';
import { Form, Input, Select } from 'antd';
import styled from '@emotion/styled';
import { SearchOutlined } from '@ant-design/icons';

export interface User {
    id: string;
    name: string;
    email: string;
    title: string;
    token: string;
}

interface SearchPanelProps {
    users: User[];
    param: {
        name: string;
        personId: string;
    };
    setParam: (param: SearchPanelProps['param']) => void;
}

export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
    return (
        <Form style={{ marginBottom: '2rem' }} layout={'inline'}>
            <Form.Item>
                <RoundSearch
                    type="text"
                    prefix={<SearchOutlined />}
                    value={param.name}
                    placeholder={'Search projects'}
                    onChange={(evt) =>
                        setParam({
                            ...param,
                            name: evt.target.value,
                        })
                    }
                />
            </Form.Item>
            <Form.Item>
                <RoundSelect
                    value={param.personId}
                    onChange={(value) =>
                        setParam({
                            ...param,
                            personId: value as string,
                        })
                    }
                >
                    <Select.Option value={''}>Assignee</Select.Option>
                    {users.map((user) => (
                        <Select.Option key={user.id} value={user.id}>
                            {user.name}
                        </Select.Option>
                    ))}
                </RoundSelect>
            </Form.Item>
        </Form>
    );
};

const RoundSearch = styled(Input)`
    border-radius: 15px;
    width: 24rem;
    border-color: #262626 !important;
    box-shadow: none !important;
    :hover {
        border: 1px solid #262626 !important;
        outline: 1px solid #262626 !important;
        box-shadow: none !important;
        transition: none !important;
    }
`;

const RoundSelect = styled(Select)`
    .ant-select-selector {
        border-radius: 15px;
        border: 1px solid #262626 !important;
        :hover {
            outline: 1px solid #262626 !important;
            transition: none !important;
        }
    }
`;
