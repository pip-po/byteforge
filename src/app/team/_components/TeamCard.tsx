import { User } from "@/types/userType";
import Image from "next/image";
import React from "react";
import { getTeamData } from "../_api/getTeam";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  LocateIcon,
  LocateOffIcon,
  MailIcon,
  MapPin,
  PhoneCallIcon,
} from "lucide-react";

const TeamCard = async ({ title }: { title: string }) => {
  const user: User | null = await getTeamData();
  if (!user) return null;
  return (
    <div>
      <Card className="flex  ">
        <CardHeader className="relative">
          <Image
            src={user.picture.large}
            alt="teamImg"
            width={500}
            height={500}
            className="rounded-lg overflow-hidden max-w-full max-h-[200px] shadow-sm object-cover"
          />
        </CardHeader>
        <CardContent>
          <p className="text-lg font-bold">{` ${user.name.first} ${user.name.last} - ${title}`}</p>
          {/* <p className="text-xl"></p> */}
          <p className="text-sm flex gap-2 md:text-base">
            <MailIcon /> {user.email}
          </p>
          <p className="text-[0.75rem] gap-2 flex md:text-base">
            <MapPin />
            {user.location.city}
          </p>
          <p className="text-[0.75rem] gap-2 flex font-semibold md:text-base">
            <PhoneCallIcon /> {user.phone}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamCard;
