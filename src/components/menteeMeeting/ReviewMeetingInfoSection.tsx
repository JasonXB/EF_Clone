
import FormItem from '../FormItem';
import { ReviewMeetingInfoSectionProps } from '../../interface/book-meeting/book-with-mentor.interface'

const ReviewMeetingInfoSection = ({fullName, timeReview, hasSelectedATime}: ReviewMeetingInfoSectionProps) => {
  return (
    <FormItem itemString={'3. Review Meeting Information'}>
        <div className="flex xl:flex-row flex-col lg:justify-between lg:w-11/12 lg:p-4 pt-4 space-y-2 lg:space-y-0">
            <div className="flex flex-row space-x-2 font-medium">
                <p className='xl:text-lg'>Meeting with </p>
                <p className="font-bold xl:text-lg">{fullName}</p>
            </div>
            <div className="flex flex-row space-x-2 font-medium">
                <p className='xl:text-lg'>Time: </p>
                {hasSelectedATime ? (
                <p className="font-bold xl:text-lg">{timeReview}</p>
                ) : (
                <p className="font-bold xl:text-lg">None</p>
                )}
            </div>
            <div className="flex flex-row space-x-2 font-medium">
                <p className='xl:text-lg'>Meeting Method:</p>
                <p className="font-bold xl:text-lg">Google Meet</p>
            </div>
        </div>
    </FormItem>
  )
}

export default ReviewMeetingInfoSection