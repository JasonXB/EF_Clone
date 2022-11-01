import Image, { StaticImageData } from 'next/image';

interface BlogCardProps {
  props: {
    img: string | StaticImageData;
    title: string;
    blurb: string;
  };
}

const BlogCard = ({ props }: BlogCardProps) => {
  const { img, title, blurb } = props;

  return (
    <div
      className=" mx-4 lg:mx-8 flex  flex-col items-center rounded-t-[15%] rounded-b-2xl "
      style={{
        boxShadow: ' 0 0.2rem 1.25rem rgba(0, 0, 0, 0.2)',
      }}
    >
      <div className="overflow-hidden ">
        <Image
          src={img}
          alt={title}
          objectFit="cover"
          placeholder="blur"
          className="rounded-t-[15%]"
        />
      </div>
      <div className="p-4 space-y-2 ">
        <h5>{title}</h5>
        <p>{blurb}</p>
      </div>
    </div>
  );
};
export default BlogCard;
