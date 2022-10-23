import Layout from '../src/components/Layout';

const TEMP_NOTIFICATIONS = new Array(3).fill({
  date: new Date(),
  name: 'John Doe',
  profile_path: '',
  country: 'Canada',
  position: 'Example Position',
  body: 'You have a new notification',
});

function Notifications() {
  return (
    <>
      <Layout headTitle="Notifications | Empowered Futures">
        <div className="container mx-auto">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-row justify-center">
              <span className="text-primary-1 font-semibold text-5xl mb-4">
                {'Notifications'}
              </span>
            </div>
            {TEMP_NOTIFICATIONS.map((notification, i) => (
              <div
                className="flex flex-row px-4 py-8 border rounded-[38px]"
                style={{
                  boxShadow: '0px 0px 10px #00000054',
                }}
                key={`${i}-${notification.name}`}
              >
                <div className="flex flex-col mr-2">
                  <img
                    className="rounded-xl max-w-[147px] max-h-[157px]"
                    src="https://picsum.photos/200"
                    width={147}
                    height={157}
                    alt="Placeholder Photo"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="text-sm">
                    {notification.date.toLocaleDateString()}
                  </div>
                  <div className="text-sm">
                    {notification.date.toLocaleTimeString()}
                  </div>
                  <div className="font-bold">{notification.name}</div>
                  <div className="font-bold">{notification.country}</div>
                  <div className="font-bold">{notification.position}</div>
                  <div className="text-sm">{notification.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Notifications;
