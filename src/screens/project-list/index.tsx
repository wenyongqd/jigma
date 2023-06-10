import React, { useEffect, useState } from 'react';
import { SearchPanel } from './search-panel';
import { List } from './list';
import { cleanObject, useDebounce, useMount } from '../../utils';
import { useHttp } from '../../utils/http';
import styled from '@emotion/styled';

export const ProjectListScreen = () => {
    const [users, setUsers] = useState([]);
    const [list, setList] = useState([]);
    const [param, setParam] = useState({
        name: '',
        personId: '',
    });
    const debouncedParam = useDebounce(param, 500);
    const http = useHttp();

    useEffect(() => {
        http('projects', { data: cleanObject(debouncedParam) }).then(setList);
    }, [debouncedParam, http]);

    useMount(() => {
        http('users').then(setUsers);
    });

    return (
        <Container>
            <h1>Projects</h1>
            <SearchPanel users={users} param={param} setParam={setParam} />
            <List users={users} list={list} />
        </Container>
    );
};

const Container = styled.div`
    padding: 3.2rem;
`;
