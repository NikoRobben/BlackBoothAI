import LeadCard from "@/components/LeadCard";
import Sidebar from "@/components/Sidebar";

export default function LeadsPage() {
  return (
    <main className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <section className="flex-1 p-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold">Leads</h1>
            <p className="text-zinc-400 mt-2">
              Manage trade show contacts, buyer intent, and follow-up status.
            </p>
          </div>

          <button className="bg-white text-black px-5 py-3 rounded-xl font-semibold">
            + Add Lead
          </button>
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
      </section>
    </main>
  );
}