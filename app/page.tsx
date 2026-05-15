import LeadCard from "@/components/LeadCard";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-5xl font-bold">BlackBoothAI</h1>

            <p className="text-zinc-400 mt-2">
              AI-powered trade show relationship intelligence
            </p>
          </div>

          <button className="bg-white text-black px-5 py-3 rounded-xl font-semibold hover:bg-zinc-200 transition">
            + Add Lead
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-zinc-900 rounded-2xl p-6">
            <p className="text-zinc-400">Hot Leads</p>

            <h2 className="text-4xl font-bold mt-2">12</h2>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <p className="text-zinc-400">Meetings Scheduled</p>

            <h2 className="text-4xl font-bold mt-2">5</h2>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <p className="text-zinc-400">Pending Follow-Ups</p>

            <h2 className="text-4xl font-bold mt-2">18</h2>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <p className="text-zinc-400">Response Rate</p>

            <h2 className="text-4xl font-bold mt-2">67%</h2>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Recent Leads</h2>

              <p className="text-zinc-400">
                AI-tracked conversations and opportunities
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <LeadCard
              name="Carlos Mendes"
              company="Brazil"
              status="Hot Lead"
              note="Interested in OEM furniture manufacturing"
            />

            <LeadCard
              name="Sophie Laurent"
              company="France"
              status="Warm Lead"
              note="Requested pricing and MOQ details"
            />

            <LeadCard
              name="David Kim"
              company="Korea"
              status="Negotiation"
              note="Waiting on updated quotation"
            />
          </div>
        </div>
      </div>
    </main>
  );
}