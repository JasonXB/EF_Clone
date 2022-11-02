import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// Docs for splide https://splidejs.com/

import '@splidejs/react-splide/css';
import SimilarMentorsMiniProfile from './SimilarMentorsMiniProfile';
import { useSimilarMentorsContext } from '../../../../state-management/ReactContext/SimilarMentorsContext';

export interface MiniCardProps {
  name: string;
  location: string;
  job: string;
  avatar: any;
  skills: string[];
  about?: string;
  availability?: string;
  percentBarSkills?: Array<{
    name: string;
    percentage: number;
  }>;
}

type dataType = {
  data: MiniCardProps[];
};

//need to fix arrows adjustment and progress dots
const ResponsiveSlider = ({ data }: { data: dataType }) => {
  const { selectSimilarMentor } = useSimilarMentorsContext();

  const length: number = data.data.length;
  const Options = {
    perPage: 3,
    gap: '2em',
    pagination: false,
    padding: { left: '2rem', right: '2rem' },
    lazyLoad: true,
    arrows: length < 4 ? false : true,
    breakpoints: {
      1024: {
        perPage: 2,
        arrows: true,
      },
      767: {
        perPage: 1,
        arrows: true,
        padding: { left: '0.5rem', right: '0.5rem' },
      },
    },
  };

  return (
    <div className="mx-auto w-[100%]">
      <Splide
        options={Options}
        aria-label="display similar mentors"
        tag="section"
        id="similarMentorsSplideComponent"
      >
        {data.data?.map((each, i) => (
          <SplideSlide
            key={i}
            onClick={() => selectSimilarMentor(i)}
            className=""
          >
            <SimilarMentorsMiniProfile
              name={each.name}
              avatar={each.avatar}
              location={each.location}
              job={each.job}
              tags={each.skills}
              // compatibilityPercent={each.compatibilityPercent}
              key={i}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
const SimilarMentorsCarousel = (data: dataType) => (
  <>
    {/* logic if there are no requests */}
    {data.data?.length === 0 ? (
      <div className="w-1/2 mx-auto mt-[10%]">
        <p className="font-bold text-center text-smoke-2">
          No similar mentors found.
        </p>
      </div>
    ) : data.data?.length < 3 ? (
      // display if there is 1-2
      <div className="flex flex-col md:flex-row sm:max-w-[900px] sm:mx-auto">
        {data.data?.map((each, i) => (
          <ResponsiveSlider key={i} data={data} />
        ))}
      </div>
    ) : (
      // display as carousel only if 3 or more
      <ResponsiveSlider data={data} />
    )}
  </>
);

export default SimilarMentorsCarousel;