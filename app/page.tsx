import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/api/auth/signin">Log In</Link>
    </main>
  );
}
