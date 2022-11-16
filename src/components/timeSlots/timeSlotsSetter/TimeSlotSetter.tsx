import { useContext } from 'react';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { TimeSlotSetterProps } from "../../../interface/book-meeting/book-with-mentor.interface";
import { TimezoneContext } from '../../../../state-management/ReactContext/TimezoneContext';
import TimeTextField from './TimeTextField';


const TimeSlotSetter = ({ meeting }: TimeSlotSetterProps) => {
    const { IANACounterpart } = useContext(TimezoneContext);

    //converted timezones by referring to the useState variable IANACounterpart-------------
    const convertedStartTime = utcToZonedTime(
        meeting.startDatetime,
        IANACounterpart as unknown as string
    );

    const convertedEndTime = utcToZonedTime(meeting.endDatetime, IANACounterpart as unknown as string);

    return (
        <div className="flex-auto flex">
            <TimeTextField time={format(convertedStartTime, 'HH:mm')} />
            <svg height="20" width="30" className='stroke-primary-1 ml-2 mr-4 mt-4'>
                <path className="top-10" stroke-width="2" d="M5 10 l215 0" />
            </svg>
            <TimeTextField time={format(convertedEndTime, 'HH:mm')} />
        </div>
    );
};

export default TimeSlotSetter;
