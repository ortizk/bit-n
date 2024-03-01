import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

// export async function POST(request: NextRequest) {
//   const body = await request.json();
//   return NextResponse.json(`Endpoint was pinged: ${body}`, {
//     status: 201,
//   });
// }

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // this should check if there is a profile that already exists for this user
  // if not, create it. >>if so, update it
  // Profile record should be created with the user_id

  // const user = await prisma.user.findUnique({ where: { email: body.email } });
  console.log(`campervan: ${body}`);
  const newProfile = await prisma.profile.create({
    data: {
      user_id: 123,
      name: body.name,
      about_me: body.about_me,
      height: body.height,
      gender: body.gender,
      pronouns: body.pronouns,
      ethnicity: body.ethnicity,
      relationship_status: body.relationship_status,
      looking_for: body.looking_for,
      hiv_status: body.hiv_status,
      last_tested: body.last_tested,
    },
  });
  return NextResponse.json(newProfile, { status: 201 });
}
