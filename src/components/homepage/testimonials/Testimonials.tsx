import TestimonialCard from './TestimonialCard';
import placeholderAvatar from '../../../../public/assets/cat.jpeg';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

const mockData = {
  testimonials: [
    {
      img: placeholderAvatar,
      fullName: 'Bill Gates',
      company: 'Microsoft Company',
      rate: 5,
      reviewBlurb:
        'I loved mentoring with Empowered Futures. The process was simple and easy to use. I will recommend to my friends to join Empowered Futures, to mentor people in the future.',
    },
    {
      img: placeholderAvatar,
      fullName: 'Bill Gates',
      company: 'Microsoft Company',
      rate: 5,
      reviewBlurb:
        'I loved mentoring with Empowered Futures. The process was simple and easy to use. I will recommend to my friends to join Empowered Futures, to mentor people in the future.',
    },
    {
      img: placeholderAvatar,
      fullName: 'Bill Gates',
      company: 'Microsoft Company',
      rate: 4,
      reviewBlurb:
        'I loved mentoring with Empowered Futures. The process was simple and easy to use. I will recommend to my friends to join Empowered Futures, to mentor people in the future.',
    },
    {
      img: placeholderAvatar,
      fullName: 'Bill Gates',
      company: 'Microsoft Company',
      rate: 5,
      reviewBlurb:
        'I loved mentoring with Empowered Futures. The process was simple and easy to use. I will recommend to my friends to join Empowered Futures, to mentor people in the future.',
    },
    {
      img: placeholderAvatar,
      fullName: 'Bill Gates',
      company: 'Microsoft Company',
      rate: 4,
      reviewBlurb:
        'I loved mentoring with Empowered Futures. The process was simple and easy to use. I will recommend to my friends to join Empowered Futures, to mentor people in the future.',
    },
  ],
};

const Testimonials = () => {
  const Options = {
    perPage: 3,
    gap: '2em',
    pagination: false,
    lazyLoad: true,

    breakpoints: {
      1200: {
        perPage: 2,
        arrows: true,
      },
      767: {
        perPage: 1,
        arrows: true,
      },
    },
  };
  return (
    <div
      className="block
    mt-20 mx-auto max-w-[1400px]"
    >
      <Splide
        options={Options}
        aria-label="show case mentorship requests"
        tag="section"
        id="mentorRequestSplideComponent"
      >
        {mockData?.testimonials?.map((each, i) => (
          <SplideSlide key={i}>
            <TestimonialCard key={i} props={each} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Testimonials;
