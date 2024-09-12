import React from "react";
import TeamCard from "@/components/TeamCard";
const Team = () => {
  const people = [
    {
      name: "Arslan Karim",
      role: "Senior UX/UI Designer",
      imageUrl: "/images/gajni.jpg",
      githubUrl: "/team",
      linkedinUrl: "/team",
      upworkUrl: "https://www.upwork.com/nx/find-work/best-matches",
    },
    {
      name: "Arslan Kashif",
      role: " Web Developer",
      imageUrl: "/images/img3.jpg",
      githubUrl: "https://github.com/",
      linkedinUrl: "https://www.linkedin.com/feed/",
      upworkUrl: "https://www.upwork.com/nx/find-work/best-matches",
    },
    {
      name: "",
      role: "Grapic Designer",
      imageUrl: "/images/IMG.JPG",
      githubUrl: "https://github.com/",
      linkedinUrl: "https://www.linkedin.com/feed/",
      upworkUrl: "https://www.upwork.com/nx/find-work/best-matches",
    },
  ];
  return (
    <div className="bg-blue-900  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Meet our team
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            We&apos;re a dynamic group of individuals who are passionate about
            what we do.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {people.map((person, index) => (
            <TeamCard
              image={person.imageUrl}
              name={person.name}
              role={person.role}
              linkedinUrl={person.linkedinUrl}
              githubUrl={person.githubUrl}
              upworkUrl={person.upworkUrl}
              key={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
