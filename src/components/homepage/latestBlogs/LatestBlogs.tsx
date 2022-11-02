import placeholderImg from '../../../../public/assets/temp-blog-placeholder.jpeg';
import BlogCard from './BlogCard';

const mockData = {
  blogs: [
    {
      img: placeholderImg,
      title: 'Blog Title',
      blurb:
        'Destroy dog cat snacks, or cuddle no cuddle cuddle love scratch scratch jump on human and sleep on her all night',
    },
    {
      img: placeholderImg,
      title: 'Blog Title',
      blurb:
        'Destroy dog cat snacks, or cuddle no cuddle cuddle love scratch scratch jump on human and sleep on her all night',
    },
    {
      img: placeholderImg,
      title: 'Blog Title',
      blurb:
        'Destroy dog cat snacks, or cuddle no cuddle cuddle love scratch scratch jump on human and sleep on her all night',
    },
  ],
};
//will need to add ability to only display latest 3 blogs, Design is missing exactly what they want to do. Temp Solution for Demo
const LatestBlogs = () => {
  return (
    <div
      className="
    mt-20 mx-auto max-w-[1400px] flex"
    >
      {mockData.blogs.map((each, i) => (
        <BlogCard key={i} props={each} />
      ))}
    </div>
  );
};

export default LatestBlogs;
