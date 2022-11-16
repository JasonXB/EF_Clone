import { useState, ChangeEvent } from 'react';
import { TimeTextFieldProps } from "../../../interface/book-meeting/book-with-mentor.interface";


const TimeTextField = ({ time }: TimeTextFieldProps) => {
    const [timeInput, setTimeInput] = useState(time)

    const changeTime = (event: ChangeEvent<HTMLInputElement>) => {
        setTimeInput((event.target as HTMLInputElement).value)
    }
    
    return (
        <div>
            <input onChange={changeTime} className="border-2 border-primary-1 rounded-lg text-lg font-bold p-2 w-40" type="time" min="00:00" max="24:00" value={timeInput}/>
        </div>
    )
}

export default TimeTextField