import Link from 'next/link';
import { buttonVariants } from '../buttons/reusable-buttons';
import bannerImg from '../../assets/homePageHeroImg.png';
import Image from 'next/image';

const HomePageBanner = () => (
  //mobile view still debatable
  <div className="relative  my-8 mb-20  sm:mt-[5%]  lg:mt-[4%] xl:w-3/4 xl:mx-auto ">
    <div className="w-full ss:py-4  text-justify ss:text-left sm:h-[60vh]   lg:w-3/4 ">
      <h1 className="text-3xl font-semibold leading-tight sm:text-5xl text-primary-1 lg:text-6xl">
        Maximizing Hope, <br /> Empowering Potential
      </h1>
      <p className="text-lg ss:w-9/12 ss:py-4 md:text-xl">
        We help empowered young minds to look forward to their future.
        We&lsquo;re looking for mentors ready to support the next generation of
        leaders
      </p>
      <div className="space-x-5 my-7">
        <Link href="/find-a-mentor">
          <a className={`${buttonVariants.primary} py-4 px-5 font-light `}>
            Find a mentor
          </a>
        </Link>
        <Link href="/become-a-mentor">
          <a className={`${buttonVariants.secondary} py-4 px-5 font-light`}>
            Be a mentor
          </a>
        </Link>
      </div>
      <div className="sm:absolute w-full bottom-0 right-0 sm:w-[80%] sm:h-auto md:w-[70%] max-w-[1000px] z-0 sm:z-[-1]">
        <Image
          src={bannerImg}
          alt="graphic of people chatting by computers with a big lightbulb"
        />
      </div>
    </div>
  </div>
);

export default HomePageBanner;
