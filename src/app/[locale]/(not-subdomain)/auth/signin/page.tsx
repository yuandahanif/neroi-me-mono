import { getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "~/server/auth";
import SignInButton from "./_signInButton";
import { Suspense } from "react";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await getServerSession(authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    redirect("/");
  }

  const providers = await getProviders();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Suspense fallback={"beeeppp . . . . "}>
        {providers != null &&
          Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <SignInButton provider={provider} />
            </div>
          ))}
      </Suspense>
    </div>
  );
}
