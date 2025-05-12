import Link from "next/link"; //Link component from Next.js library
// which allows us to navigate between pages and is used to create links and is much better than using the <a> tag
// because it does not cause a full page reload and is more efficient

export default function Page() {
  return (
    <div>
      <h1>Web Dev 2 Practice</h1>
      <p>Welcome to the Web Dev 2 Practice page!</p>
      <p>
        Link to week 2: <Link href="week-2">Week 2</Link>
      </p>
    </div>
  );
}
