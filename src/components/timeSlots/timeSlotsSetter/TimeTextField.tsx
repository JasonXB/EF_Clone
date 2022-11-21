import { useState, ChangeEvent } from 'react';
import { TimeTextFieldProps } from "../../../interface/book-meeting/book-with-mentor.interface";

function classNames(...classes: (string | boolean)[]) {
    return classes.filter(Boolean).join(' ');
  }

const TimeTextField = ({ time, isTimeNull }: TimeTextFieldProps) => {
    const [timeInput, setTimeInput] = useState(time)
    //variable used to set the text color of the time to gray if it is null
    const [isFieldNull, setIsFieldNull] = useState(isTimeNull) 

    const changeTime = (event: ChangeEvent<HTMLInputElement>) => {
        setTimeInput((event.target as HTMLInputElement).value)
        setIsFieldNull(false)
    }
    
    return (
        <div>
            <input 
                onChange={changeTime} 
                className={classNames(
                    "border-2 border-primary-1 rounded-lg text-xs sm:text-sm md:text-base xl:text-lg font-bold p-1 xl:p-2 w-28 sm:w-32 xl:w-40",
                    (isFieldNull as boolean) && "text-hue-400"
                    )} 
                type="time" min="00:00" max="24:00" value={timeInput}
            />
        </div>
    )
}

export default TimeTextField