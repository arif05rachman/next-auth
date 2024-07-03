"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Info() {
  const { data, status } = useSession();
  console.log({ data, status });
  return (
    <div>
      {!data && (
        <>
          <h1>Welcome to My App</h1>
          <button onClick={() => signIn("google")}>Sign in with Google</button>
        </>
      )}
      {data && (
        <>
          <h1>Welcome, {JSON.stringify(data)}</h1>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
}
