import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="min-h-screen w-64 bg-zinc-950 border-r border-zinc-800 p-6 text-white">
      <h1 className="text-2xl font-bold mb-10">BlackBoothAI</h1>

      <nav className="space-y-3">
        <Link href="/" className="block rounded-xl px-4 py-3 bg-zinc-900">
          Dashboard
        </Link>

        <Link href="/leads" className="block rounded-xl px-4 py-3 hover:bg-zinc-900">
          Leads
        </Link>

        <Link href="#" className="block rounded-xl px-4 py-3 hover:bg-zinc-900">
          Follow-Ups
        </Link>

        <Link href="#" className="block rounded-xl px-4 py-3 hover:bg-zinc-900">
          Meetings
        </Link>

        <Link href="#" className="block rounded-xl px-4 py-3 hover:bg-zinc-900">
          AI Insights
        </Link>
      </nav>
    </aside>
  );
}