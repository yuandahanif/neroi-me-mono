"use client";

import { type ClientSafeProvider, signIn } from "next-auth/react";

const SignInButton = ({ provider }: { provider: ClientSafeProvider }) => {
  return (
    <button onClick={() => void signIn(provider.id, { callbackUrl: "/admin" })}>
      Sign in with {provider.name}
    </button>
  );
};

export default SignInButton;
