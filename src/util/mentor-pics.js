import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

export const fetchMentorPics = async () => {
  const photos = await unsplash.search.getPhotos({
    query: 'profile pic',
    page: 1,
    perPage: 3,
  });
  const unsplashResults = photos.response.results;
  return unsplashResults.map((result) => result.urls['small']);
};
