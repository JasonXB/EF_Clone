import FormItem from '../FormItem';

const MeetingMethodSection = () => {
  return (
    <FormItem itemString={'2. Choose Meeting Method'}>
        <div className="flex flex-col md:flex-row p-4 space-x-0 md:space-x-4 space-y-2 md:space-y-0">
            <button
                className={`md:w-64 flex items-center py-3 group rounded-2xl focus-within:bg-gray-100 hover:bg-gray-100 border-primary-1 border-4 bg-secondary-1 font-bold`}
            >
                <div className="flex-auto">
                <p className='xl:text-lg'>Google Meet</p>
                </div>
            </button>
            <button
                className={`md:w-64 flex items-center py-3 group rounded-2xl focus-within:bg-gray-100 hover:bg-gray-100 border-primary-1 border font-medium`}
            >
                <div className="flex-auto">
                <p className='xl:text-lg'>Arrange with Mentor</p>
                </div>
            </button>
        </div>
    </FormItem>
  )
}

export default MeetingMethodSection