"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

type Lead = {
  id: string;
  name: string;
  company: string;
  country: string;
  productInterest: string;
  status: string;
};

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const savedLeads = JSON.parse(
      localStorage.getItem("blackboothai-leads") || "[]"
    );

    setLeads(savedLeads);
  }, []);

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

          <Link
            href="/leads/new"
            className="bg-white text-black px-5 py-3 rounded-xl font-semibold"
          >
            + Add Lead
          </Link>
        </div>

        {leads.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-2">No leads saved yet</h2>
            <p className="text-zinc-400 mb-6">
              Add your first trade show lead to start building relationship intelligence.
            </p>

            <Link
              href="/leads/new"
              className="inline-block bg-white text-black px-5 py-3 rounded-xl font-semibold"
            >
              Add First Lead
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {leads.map((lead) => (
              <Link key={lead.id} href={`/leads/${lead.id}`}>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex items-center justify-between hover:bg-zinc-800 transition cursor-pointer">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {lead.name || "Unnamed Lead"} — {lead.company || "Unknown Company"}
                    </h3>

                    <p className="text-zinc-400">
                      {lead.productInterest || "No product interest added"}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-green-400 font-semibold">
                      {lead.status || "New Lead"}
                    </p>

                    <p className="text-zinc-500 text-sm">
                      {lead.country || "No country"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}