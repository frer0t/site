"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

export default async function updateUserMode(
  checked: boolean,
  pathname: string
) {
  const cookieStore = await cookies();

  cookieStore.set("mode", checked.toString());
  if (checked === false && pathname !== "/") {
    redirect("/", RedirectType.replace);
  }
  revalidatePath("/");
}
