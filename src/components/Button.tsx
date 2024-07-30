"use client";
import * as stylex from '@stylexjs/stylex';

export type ButtonProps = {
    type?: 'yellow' | undefined
    children: React.ReactNode
    onClick?: () => void
}
const styles = stylex.create({
    button: {
        cursor: 'pointer',
        backgroundColor: '#e4e4e4',
        display: 'inline-block',
        padding: '12px 20px',
        borderRadius: '20px',
        textAlign: 'center',
        fontSize: '.85rem',
    },
    yellow: {
        backgroundColor: 'rgb(240, 178, 35)',
    }
})

export const Button = ({  
    type = undefined,
    children = null, 
    onClick = ()=>{
        console.log('Be happy!')
    } 
}: ButtonProps)=>{
    const buttonStyles = stylex.props(styles.button, type && styles[type])
    return (
        <button {...buttonStyles} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button