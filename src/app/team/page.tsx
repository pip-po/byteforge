import React, { Suspense } from "react";
import TeamCard from "./_components/TeamCard";
import Teams from "./_components/Teams";
import { CoreTeam } from "./_components/CoreTeam";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Team - ByteForge",
  description:
    "Get to know the brilliant minds behind ByteForge, dedicated to innovation and excellence.",
};

const Teamspage = () => {
  return (
    <section className="container m-auto p-4">
      <div className="mt-16">
        <Teams />
        <Suspense>
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center mx-5 md:mx-28 gap-5 my-10 ">
            <TeamCard title="CEO" />
            <TeamCard title="CTO" />
            <TeamCard title="CMO" />
          </div>
        </Suspense>
        <CoreTeam />
      </div>
    </section>
  );
};

export default Teamspage;
