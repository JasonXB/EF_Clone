import Layout from '../../src/components/Layout';
import { useEffect, useState } from 'react';
import MentorCard from '../../src/components/MentorCard';
import Mentor from '../../src/interface/mentor.interface';
import { useRouter } from 'next/router';
import { getMentors } from '../../src/api/mentorList/mentor-list';

enum FilterDefaults {
  Gender = 'All',
  Location = 'All',
  Skill = 'All',
}

declare module 'axios' {
  export interface AxiosRequestConfig {
    name: string;
    id: string;
    protocolProfileBehavior: {};
    request: {
      method: string;
      header: [];
      url: string;
    };
    response: [];
  }
}

const GenderOptions = [
  FilterDefaults.Gender,
  'Male',
  'Female',
  'Prefer not to say',
];

export default function MentorList() {
  // carry over query from /find-a-mentor page
  const router = useRouter();
  let { q } = router.query;
  if (!q) q = '';

  let [allMentors, setAllMentors] = useState<Mentor[]>([]);

  // Filters
  let [genderFilter, setGenderFilter] = useState(FilterDefaults.Gender);
  let [locationFilter, setLocationFilter] = useState(FilterDefaults.Location);
  let [skillFilter, setSkillFilter] = useState(FilterDefaults.Skill);

  let [query, setQuery] = useState(q as string);
  let [page, setPage] = useState(1);



  // on page render, get Mentors from backend
  useEffect(() => {
    const getAllMentors = async () => {
      const mentors = await getMentors()
      setAllMentors(mentors as Mentor[])
    }
    getAllMentors();
  }, []);

  // gender filtering
  let mentors = allMentors.filter((mentor) => {
    if (genderFilter === FilterDefaults.Gender) return true;
    if (mentor.gender === genderFilter) return true;
    return false;
  });

  // location filtering
  mentors = mentors.filter((mentor) => {
    if (locationFilter === FilterDefaults.Location) return true;
    if (mentor.location.country === locationFilter) return true;
    return false;
  });

  // skill filtering
  mentors = mentors.filter((mentor) => {
    if (skillFilter === FilterDefaults.Skill) return true;
    // haven't had much luck using forEach for this for some reason
    // for loop used instead
    for (let i = 0; i < mentor.skills.length; i++) {
      if (mentor.skills[i].skill === skillFilter) return true;
    }
    return false;
  });

  // query filtering
  mentors = mentors.filter((mentor) => {
    if (query === '') return true;
    // dump mentor strings into an array
    let { first_name, last_name, job, skills, tags, location } = mentor;
    let mentorAsArray = [
      first_name,
      last_name,

      job,
      ...skills.map((skill) => skill.skill),
      ...tags.map((tag) => tag),
    ];
    // make all strings lowercase for ease of search
    mentorAsArray = mentorAsArray.map((string) => string.toLowerCase());
    // if any part of any given mentor string includes the users query
    // it will be included in the results
    for (let i = 0; i < mentorAsArray.length; i++) {
      if (mentorAsArray[i].includes(`${query}`.toLowerCase())) return true;
    }
    return false;
  });

  let skillsArray: string[] = [];
  allMentors.forEach((mentor) => {
    {
      mentor.skills &&
        mentor.skills
          .map((skill) => skill.skill)
          .forEach((skill) => {
            // avoid duplicate skills, only add if not found
            if (!skillsArray.find((skillInArray) => skillInArray === skill))
              skillsArray.push(skill);
          });
    }
  });
  // Place 'All' as first in the array
  skillsArray = [FilterDefaults.Skill, ...skillsArray];

  let locationsArray: string[] = [];
  allMentors.forEach((mentor) => {
    // avoid duplicate locations, only add if not found
    if (
      !locationsArray.find(
        (locationInArray) => locationInArray === mentor.location.country
      )
    )
      locationsArray.push(mentor.location.country);
  });
  // place 'All' as first in the array
  locationsArray = [FilterDefaults.Location, ...locationsArray];

  // pagination
  let pageLimit = 5;
  let start = (page - 1) * pageLimit;
  let end = page * pageLimit;
  let maxPages = mentors.length / pageLimit;
  mentors = mentors.slice(start, end);

  return (
    <>
      <Layout headTitle="Mentor List">
        <div className="container mx-auto">
          <div className="flex flex-row">
            <div className="flex flex-col w-1/5 mr-20 space-y-8">
              <div
                onClick={() => router.back()}
                className="flex flex-row cursor-pointer p-2 rounded-[25px] text-white max-w-[115px] bg-gradient-to-r from-gradient-var-1 to-gradient-var-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className=""
                  viewBox="0 0 16 16"
                >
                  <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
              </div>
              <div className="space-y-2">
                <div className="flex flex-row">
                  <span className="text-primary-2 ml-2 font-bold text-[22px]">
                    Filter Mentor Profiles:
                  </span>
                </div>
                <div className="flex flex-row border border-hue-700 max-h-[60px] rounded-[23px]">
                  <input
                    type="text"
                    placeholder="Type Keywords"
                    defaultValue={query ? query : ''}
                    className="w-full p-4 rounded-[23px] outline-none"
                    onChange={(e) => setQuery(e.currentTarget.value)}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="mt-4 mr-4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col p-4 space-y-2 border border-black">
                <div className="text-[34px]">Gender</div>
                <select
                  className="p-2 bg-white border border-black rounded-xl"
                  defaultValue={FilterDefaults.Gender}
                  onChange={(e) =>
                    setGenderFilter(e.currentTarget.value as any)
                  }
                >
                  {GenderOptions.map((gender, i) => (
                    <option value={gender} key={`${i} - ${gender}`}>
                      {gender}
                    </option>
                  ))}
                </select>
                <div className="text-[34px]">Location</div>
                <select
                  className="p-2 bg-white border border-black rounded-xl"
                  defaultValue={FilterDefaults.Location}
                  onChange={(e) =>
                    setLocationFilter(e.currentTarget.value as any)
                  }
                >
                  {locationsArray.map((location, i) => (
                    <option value={location} key={`${i} - ${location}`}>
                      {location}
                    </option>
                  ))}
                </select>
                <div className="text-[34px]">Skills</div>
                <select
                  className="p-2 bg-white border border-black rounded-xl"
                  defaultValue={FilterDefaults.Skill}
                  onChange={(e) => setSkillFilter(e.currentTarget.value as any)}
                >
                  {skillsArray.map((skill, i) => (
                    <option value={skill} key={`${i} - ${skill}`}>
                      {skill}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col w-2/3 space-y-10">
              <div className="flex flex-row justify-center">
                <div className="text-center mr-20 text-primary-1 font-bold text-[54px]">
                  Find a Mentor
                </div>
              </div>
              {mentors.map((mentor, index) => (
                <MentorCard mentor={mentor} key={`${index}`} />
              ))}
              {mentors.length <= 0 && (
                <div className="mr-20 text-3xl font-bold text-center text-primary-1">
                  No mentors match those filters!
                </div>
              )}
              {mentors.length > 0 && (
                <>
                  <div className="flex flex-row justify-around">
                    <div>{''}</div>
                    <div className="flex flex-row justify-center space-x-4">
                      <button
                        className="text-xl font-semibold text-primary-2"
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                      >
                        {'<'}
                      </button>
                      <div className="w-[60px] h-[45px] pt-2 text-center font-bold text-primary-2 border rounded-[25px] border-primary-2">
                        {page}
                      </div>
                      <button
                        onClick={() => setPage(page + 1)}
                        disabled={page >= maxPages}
                        className="text-xl font-semibold text-primary-2"
                      >
                        {'>'}
                      </button>
                    </div>
                    <div>
                      <a href="#">
                        <div className="p-2 font-semibold border rounded-xl text-primary-2 border-primary-2">
                          ^ Top of Page
                        </div>
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
