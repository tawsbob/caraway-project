import * as stylex from '@stylexjs/stylex';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';
import React from 'react';

export type MarkupProps = {
    styles?: StyleXArray<{}>[]
    as?: string,
    children: React.ReactNode,
    [key: string]: any
}

//this abstraction to make the code more readable and maintainable
const Markup = ({ as = "div", styles = [], children = null, ...rest }: MarkupProps) => {
    const Component = as;
    const props = { ...stylex.props(...styles), ...rest };

    return React.createElement(
        Component,
        props,
        children
    );
}

export default Markup;