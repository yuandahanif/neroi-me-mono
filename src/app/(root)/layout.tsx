import { PropsWithChildren } from "react";
import { getServerSession } from "next-auth";

import { SessionProvider } from "next-auth/react";
import AnimationProvider from "./_providers/animation-provider";

import { authOptions } from "~/server/auth";
import { TrpcProvider } from "~/app/(root)/_providers/trpc-provider";
import { AuthProvider } from "./_providers/auth-provider";

export default async function PageLayout({ children }: PropsWithChildren) {
  const session = await getServerSession(authOptions);
  return (
    <html>
      <body>
        <AuthProvider session={session}>
          <TrpcProvider>
            <AnimationProvider>{children}</AnimationProvider>
          </TrpcProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
