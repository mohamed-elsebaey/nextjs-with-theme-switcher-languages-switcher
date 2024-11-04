import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Join the Gammal Tech community and sign in to unlock more features. ",
};

async function page() {
  return (
    <>
      <h1>Sign in</h1>
    </>
  );
}

export default page;
