import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Mentor from '../../interface/mentor.interface';

  export async function getMentors () {
    const options: AxiosRequestConfig = {
      name: "Get all mentors' profile",
      id: '57c19079-77fa-4aad-9ce3-1d93525b1ef2',
      protocolProfileBehavior: {
        disableBodyPruning: true,
      },
      request: {
        method: 'GET',
        header: [],
        url: 'https://efback.azurewebsites.net/api/mentor/list/all',
      },
      response: [],
    };

    try {
      const response: AxiosResponse = await axios.get(
        'https://efback.azurewebsites.net/api/mentor/list/all',
        options
      );
      // new array of Mentor objects created to change backend property names to match frontend types
      let newMentors: Mentor[] = [];
      response.data.mentors.map((mentor: any) => {
        const newMentor: Mentor = {
          id: mentor._id,
          first_name: mentor.firstname,
          last_name: mentor.lastname,
          location: mentor.address,
          gender: mentor.gender,
          profile_path: mentor.picture,
          job: mentor.title,
          bio: mentor.bio,
          email: mentor.email,
          tags: mentor.fields,
          skills: mentor.skillsets,
        };
        newMentors.push(newMentor);
      });

      return newMentors;
    } catch (error) {
      console.log(error);
    }
  };