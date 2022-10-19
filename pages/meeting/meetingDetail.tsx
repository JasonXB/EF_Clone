import Image, { StaticImageData } from 'next/image';
import { MeetingDetailType } from '../../src/enum/meetingDetailType.enum';

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
  return (
    <div className="flex items-center mr-6">
      <Image
        src={imgLocation}
        alt="calendar icon"
        height={'30px'}
        width={'30px'}
      />{' '}
      <p className="ml-3 text-2xl">
        <span className="text-primary-3">{getTextForType(type)}</span>{' '}
        <span>{detailInfo}</span>
      </p>
    </div>
  );
};

export default MeetingDetail;
