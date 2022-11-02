import Image, { StaticImageData } from 'next/image';
import { MeetingDetailType } from '../../../src/enum/meetingDetailType.enum';

interface MeetingDetailProps {
  type: `${MeetingDetailType}`;
  detailInfo: string;
  imgLocation: StaticImageData | string;
}

const MeetingDetail = ({
  type,
  detailInfo,
  imgLocation,
}: MeetingDetailProps) => {
  function getTextForType(type: string): string {
    if (type === MeetingDetailType.date) {
      return 'Date: ';
    } else if (type === MeetingDetailType.time) {
      return 'Time: ';
    } else if (type === MeetingDetailType.place) {
      return 'Meeting Method: ';
    } else {
      throw new Error('Invalid type passed');
    }
  }

  function altTagPicker(type: string): string {
    if (type === MeetingDetailType.date) {
      return 'Calendar';
    } else if (type === MeetingDetailType.time) {
      return 'Clock';
    } else if (type === MeetingDetailType.place) {
      return 'Computer monitor';
    } else {
      throw new Error('Invalid type passed');
    }
  }

  return (
    <div className="w-full flex items-center mr-6">
      <Image
        src={imgLocation}
        alt={altTagPicker(type)}
        height={'30px'}
        width={'30px'}
      />{' '}
      <div className="ml-2 flex flex-col lg:flex-row">
        <div className="mr-2">
          <p className="text-2xl text-primary-3">{getTextForType(type)}</p>{' '}
        </div>
        <div>
          <p className="text-2xl">{detailInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default MeetingDetail;
