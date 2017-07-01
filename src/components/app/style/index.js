import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import {
    Link
} from 'react-router-dom';

export const AppOuter = styled.div`
    padding: ${rem('40px')} ${rem('30px')} ${rem('30px')} ${rem('30px')};
`;

export const AppLink = styled(({ first, last, ...rest }) => <Link {...rest} />)`
    padding-right: ${({ last }) => last ? 0 : rem('15px')};
    padding-bottom: ${rem('30px')};
    padding-left: ${({ first }) => first ? 0 : rem('15px')};
`;
