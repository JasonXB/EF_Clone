import Image from 'next/image';
import { useState } from 'react';
import letterContent from './LetterContent';

const Letter = () => {
  let split = letterContent.content.split('\n'); //split up paragraphs
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <section className="max-w-5xl py-10 mx-auto mb-10 rounded-lg bg-hue-200 drop-shadow-xl">
      <div className="max-w-4xl p-4 mx-auto ">
        <h4 className="my-2 font-bold text-primary-1">
          A Note From Our Founder
        </h4>
        <div className="my-4 ">
          <h5 className="text-xl italic">
            Help me make a powerful contribution to the youth of the new world.
          </h5>
          <div className={`${isReadMore ? 'line-clamp-[15]' : ' '} mb-4`}>
            {split.map((para, i) => (
              <p key={i} className="my-4 text-lg italic">
                {para}
              </p>
            ))}
          </div>

          <a
            aria-label="displays more or less of the letter on the screen, Not needed for screen readers"
            onClick={toggleReadMore}
            className="py-4 cursor-pointer text-primary-2 hover:underline hover:text-secondary-4"
          >
            {isReadMore ? '...read more' : ' show less'}
          </a>
        </div>
        <div className="flex justify-end w-full">
          <div className="flex flex-row items-center">
            <span className="flex flex-col mr-4 text-right">
              <p className="text-lg font-bold">Hiba Badran</p>

              <p className="italic">Chairperson Of The Board</p>
            </span>
            <Image
              src={letterContent.img}
              alt="Hiba"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Letter;
