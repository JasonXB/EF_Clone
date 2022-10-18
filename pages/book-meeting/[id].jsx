import { useRouter } from 'next/router';
import Image from 'next/image';
import mentorsData from '../../src/util/mentors.json';

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      mentor: mentorsData.find(
        (mentor) => mentor.mentor_id.toString() === params.id
      ),
    },
  };
}

export async function getStaticPaths() {
  const paths = mentorsData.map((mentor) => {
    return {
      params: {
        id: mentor.mentor_id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

const bookMeeting = (props) => {
  const router = useRouter();

  console.log(props);

  if (router.isFallback) {
    return <div>Loading</div>;
  }

  const { name, imgUrl } = props.mentor;

  return (
    <>
      <div>this is book meeting page</div>
      <Image
        src={imgUrl || 'https://ibb.co/M2Df9nq'}
        width={300}
        height={360}
        alt={name}
      />
    </>
  );
};

export default bookMeeting;
