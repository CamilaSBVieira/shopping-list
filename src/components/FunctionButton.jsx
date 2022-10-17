import { Pen, Check } from 'phosphor-react'

export default function FunctionButton({ handleClick, isEdit }) {
    return (
        <button
        onClick={handleClick}
         className="bg-blue-500 rounded-full w-16 h-16 p-3 hover:bg-blue-400 float-right">
            {isEdit && (
                <Check className='text-white w-10 h-10'/>    
            ) || (
            <Pen className='text-white w-10 h-10'/>
            )}
        </button>
    )
}