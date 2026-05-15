import Link from "next/link";

type LeadCardProps = {
  name: string;
  company: string;
  status: string;
  note: string;
};

export default function LeadCard({
  name,
  company,
  status,
  note,
}: LeadCardProps) {
  return (
    <Link href="/leads/1">
      <div className="bg-zinc-800 rounded-xl p-5 flex items-center justify-between hover:bg-zinc-700 transition cursor-pointer">
        <div>
          <h3 className="font-semibold text-lg">
            {name} — {company}
          </h3>

          <p className="text-zinc-400">
            {note}
          </p>
        </div>

        <div>
          <p className="font-semibold text-green-400">
            {status}
          </p>
        </div>
      </div>
    </Link>
  );
}