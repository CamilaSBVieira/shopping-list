import '../styles/main.css';
import { Pen } from 'phosphor-react'

export default function User({ name, handleClick }) {
    return (
        <div className='flex justify-end items-center space-x-2'>
            <p className='text-blue-500 font-bold'>{name}</p>
            <Pen
                className='text-blue-500'
                onClick={handleClick}></Pen>
        </div>
    );
}