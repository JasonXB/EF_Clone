import Link from 'next/link';
import { buttonVariants } from '../buttons/reusable-buttons';
import bannerImg from '../../assets/homePageHeroImg.png';
import Image from 'next/image';
import style from '../../../styles/homePage.module.css';

const HomePageBanner = () => (
  //mobile view still debatable
  <div className=" overflow-auto  my-8 mb-20  sm:mt-[5%]  lg:mt-[4%] xl:w-3/4 xl:mx-auto ">
    <div className="flex flex-col items-center w-full text-center md:block ss:py-4 md:text-left">
      <div
        className={`${style.customClipPath} ss:w-[80%] md:w-[60%] lg:w-[70%] float-right w-full  max-w-[1000px]`}
      >
        <Image
          src={bannerImg}
          alt="graphic of people chatting by computers with a big lightbulb"
          width={1000}
          height={598}
        />
      </div>
      <div className="lg:w-1/2">
        <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl text-primary-1 lg:text-6xl">
          Maximizing Hope, <br /> Empowering Potential
        </h1>
        <p className="py-4 text-lg ss:w-3/4 ss:mx-auto md:mx-0 md:w-9/12 md:text-xl">
          We help empowered young minds to look forward to their future.
          We&lsquo;re looking for mentors ready to support the next generation
          of leaders
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
      </div>
    </div>
  </div>
);

export default HomePageBanner;
