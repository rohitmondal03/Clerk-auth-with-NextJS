import Link from "next/link";
import { auth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();

  return (
    <section>
      {userId ? (
        <>
          <h3>Signed in</h3>
          <button>
            <Link href={"/dashboard"}>
              Dasboard
            </Link>
          </button>
        </>
      ) : (
        <>
          <h2>Not signed in</h2>
          <Link href={"https://right-cockatoo-60.accounts.dev/sign-in"}>
            <button>Sign in</button>
          </Link>
        </>
      )}
    </section>
  );
}
