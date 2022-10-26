import { UserNotification } from '../interface/user-notification.interface';

interface NotificationCardProps {
  notification: UserNotification;
}

function NotificationCard({ notification }: NotificationCardProps) {
  const { date } = notification;
  let hours = date.getHours();
  if (hours > 12) {
    hours -= 12;
  }
  const HH = hours.toString().padStart(2, '0');
  const MM = date.getMinutes().toString().padStart(2, '0');
  const timeNotation = date.toLocaleTimeString().slice(-2).toLocaleLowerCase();

  return (
    <>
      <div
        className="flex flex-row px-4 py-8 border rounded-[38px]"
        style={{
          boxShadow: '0px 0px 10px #00000054',
        }}
      >
        <div className="flex flex-col mr-2">
          <img
            className="rounded-xl max-w-[147px] max-h-[157px]"
            src="https://picsum.photos/200"
            alt=""
          />
        </div>
        <div className="flex flex-col space-y-1">
          <div className="text-sm">
            {notification.date.toLocaleDateString()}
          </div>
          <div className="text-sm">{`${HH}:${MM}${timeNotation}`}</div>
          <div className="font-bold">{notification.name}</div>
          <div className="font-bold text-sm">{notification.country}</div>
          <div className="font-bold text-sm">{notification.position}</div>
          <div className="text-sm">{notification.body}</div>
        </div>
      </div>
    </>
  );
}

export default NotificationCard;