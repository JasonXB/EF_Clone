import Layout from '../../src/components/Layout';
import NotificationCard from '../../src/components/notificationCard';
import { UserNotification } from '../../src/interface/user-notification.interface';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Notifications: NextPage = () => {
  let [notifications, setNotifications] = useState<UserNotification[]>();

  useEffect(() => {
    setNotifications(
      new Array(3).fill({
        date: new Date(),
        name: 'John Doe',
        profile_path: '',
        country: 'Canada',
        position: 'Example Position',
        body: 'You have a new notification',
      })
    );
  }, []);

  return (
    <>
      <Layout headTitle="Notifications" background="none">
        <div className="container mx-auto">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-row justify-center">
              <span className="mb-4 text-5xl font-semibold text-primary-1">
                {'Notifications'}
              </span>
            </div>
            {notifications &&
              notifications.map((notification, i) => (
                <NotificationCard
                  notification={notification}
                  key={`${i}-${notification.name}`}
                />
              ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Notifications;
