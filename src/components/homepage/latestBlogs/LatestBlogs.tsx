import placeholderAvatar from '../../../../public/assets/cat.jpeg';
import BlogCard from './blogCard';

const mockData = {
  blogs: [
    {
      date: '',
      img: placeholderAvatar,
      title: 'Blog Title',
      blurb:
        'Destroy dog cat snacks, or cuddle no cuddle cuddle love scratch scratch jump on human and sleep on her all night',
    },
    {
      date: '',
      img: placeholderAvatar,
      title: 'Blog Title',
      blurb:
        'Destroy dog cat snacks, or cuddle no cuddle cuddle love scratch scratch jump on human and sleep on her all night',
    },
    {
      date: '',
      img: placeholderAvatar,
      title: 'Blog Title',
      blurb:
        'Destroy dog cat snacks, or cuddle no cuddle cuddle love scratch scratch jump on human and sleep on her all night',
    },
  ],
};

const LatestBlogs = () => {
  return (
    <div
      className="
    mt-40 mx-auto max-w-[1200px] flex"
    >
      {mockData.blogs.map((each, i) => (
        <BlogCard key={i} props={each} />
      ))}
    </div>
  );
};

export default LatestBlogs;
