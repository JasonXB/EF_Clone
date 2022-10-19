import Image from 'next/image';

import Layout from '../../src/components/Layout';

import Cat from '../../src/components/assets/cat.jpeg';
import Avatar from '../../src/components/avatar/avatar';

const ConfirmedMeeting = ({}) => {
  const name = 'Captain Placeholder';
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="w-3/5 flex flex-col justify-center ">
          <div>
            <div>
              <Avatar
                imgLocation={Cat}
                displaySize={'small'}
                // todo: give avatar a "rounded: 50%" setting
                personsName={name}
              />
              <p>{name}</p>
            </div>
          </div>
          <div>
            <div>
              <h4 className="font-semibold text-primary-1">Confirmed</h4>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis excepturi sapiente vero maxime suscipit quisquam minima
              doloremque quibusdam. Qui, alias? Exercitationem neque tempora et!
              Consequatur neque sunt exercitationem similique at.
            </div>
          </div>
          <div>
            <div>Date</div>
            <div>Time</div>
            <div>Method</div>
          </div>
          <div>Back</div>
        </div>
      </div>
    </Layout>
  );
};
export default ConfirmedMeeting;
