"use client";
import * as stylex from '@stylexjs/stylex';
import Markup from './Markup';

export type ButtonProps = {
    type?: 'yellow' | 'default'
    children: React.ReactNode
    onClick?: () => void
}
const styles = stylex.create({
    button: {
        cursor: 'pointer',
        display: 'inline-block',
        padding: '12px 20px',
        borderRadius: '20px',
        textAlign: 'center',
        fontSize: '.85rem',
    },
    default: {
        backgroundColor: '#e4e4e4',
    },
    yellow: {
        backgroundColor: 'rgb(240, 178, 35)',
    }
})

export const Button = ({  
    type = 'default',
    children = null, 
    onClick = ()=>{
        console.log('Be happy!')
    } 
}: ButtonProps)=>{
    
    return (
        <Markup styles={[styles.button, styles[type]  ]} onClick={onClick}>
            {children}
        </Markup>
    )
}

export default Button