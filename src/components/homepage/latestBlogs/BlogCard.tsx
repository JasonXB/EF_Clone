import Image from 'next/image';

const BlogCard = (props: any) => {
  const { img, title, blurb } = props.props;

  return (
    <div
      className=" mx-4 flex space-y-4 flex-col items-center rounded-t-[15%]"
      style={{
        boxShadow: ' 0 0.2rem 1.25rem rgba(0, 0, 0, 0.2)',
      }}
    >
      <Image src={img} alt={title} objectFit="cover" placeholder="blur" />
      <div className="p-4">
        <h4>{title}</h4>
        <p>{blurb}</p>
      </div>
    </div>
  );
};
export default BlogCard;
