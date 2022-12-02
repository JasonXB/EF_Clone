import { utcToZonedTime } from 'date-fns-tz';
import { isSameDay } from 'date-fns';
import { Availability } from '../../interface/book-meeting/book-with-mentor.interface'

//find if the mentor has availabilities on the selected date by comparing the date selected and the date in the json data
export function selectedDayAvailability (availabilities: Availability[], selectedDay: Date,IANACounterpart: Promise<string>) {
    return availabilities && availabilities.filter((availability: Availability)=>{
        const zonedStartTime = utcToZonedTime(
            availability.startDatetime,
            IANACounterpart as unknown as string
        )
        return isSameDay(zonedStartTime, selectedDay)
    })
}