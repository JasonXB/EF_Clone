import Link from 'next/link';
import { buttonVariants } from '../buttons/reusable-buttons';

const HomePageBanner = () => (
  //missing banner graphic and background graphics
  <div>
    <div className="w-full py-4 mt-[20%] mb-[20%] sm:mb-[10%] sm:h-[60vh] sm:w-8/12 ">
      <h1 className="text-3xl font-semibold leading-tight sm:text-5xl text-primary-1">
        Maximizing Hope, <br /> Empowering Potential
      </h1>
      <p className="w-9/12 py-4">
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
      {/* <Image src={bannerImg} alt='graphic of people chatting by computers with a big lightbulb'/> */}
    </div>
  </div>
);

export default HomePageBanner;
