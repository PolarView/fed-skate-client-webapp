import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-y-10">
      <div className="flex-1 flex w-full text-5xl items-center justify-center border border-solid border-black">
        <Link href="/men-park-results">Park Men</Link>
      </div>

      <div className="flex-1 flex w-full text-5xl items-center justify-center border border-solid border-black">
        <Link href="/women-park-results">Park Women</Link>
      </div>
      <div className="flex-1 flex w-full text-5xl items-center justify-center border border-solid border-black">
        Street Men
      </div>
      <div className="flex-1 flex w-full text-5xl items-center justify-center border border-solid border-black">
        Street Women
      </div>
    </main>
  );
}
