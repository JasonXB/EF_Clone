import { useContext } from 'react';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { TimeSlotSetterProps } from "../../interface/book-meeting/book-with-mentor.interface";
import { TimezoneContext } from '../../../state-management/ReactContext/TimezoneContext';


const TimeSlotSetter = ({ meeting }: TimeSlotSetterProps) => {
    const { IANACounterpart } = useContext(TimezoneContext);

    //converted timezones by referring to the useState variable IANACounterpart-------------
    const convertedStartTime = utcToZonedTime(
        meeting.startDatetime,
        IANACounterpart as unknown as string
    );

    const convertedEndTime = utcToZonedTime(meeting.endDatetime, IANACounterpart as unknown as string);

    return (
        <div>
            <div className="flex-auto flex">
                <svg height="20" width="20">
                    <circle cx="10" cy="10" r="6" className='fill-primary-1' />
                </svg>
                <p className="ml-2">
                    <time dateTime={format(convertedStartTime, 'hh:mm a')}>
                    {format(convertedStartTime, 'hh:mm a')}
                    </time>{' '}
                    -{' '}
                    <time dateTime={format(convertedEndTime, 'hh:mm a')}>
                    {format(convertedEndTime, 'hh:mm a')}
                    </time>
                </p>
            </div>
        </div>
    );
};

export default TimeSlotSetter;
