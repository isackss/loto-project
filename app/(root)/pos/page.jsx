import PosForm from "@/components/forms/PosForm";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import React from "react";

const Pos = async () => {
  /* const { userId } = auth(); */

  const userId = "12345";

  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });

  console.log(mongoUser);

  return (
    <main className="h-svh p-4">
      <PosForm mongoUserId={JSON.stringify(mongoUser._id)} />
    </main>
  );
};

export default Pos;
