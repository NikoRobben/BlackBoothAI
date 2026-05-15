"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Sidebar from "@/components/Sidebar";

type Lead = {
  id: string;
  name: string;
  company: string;
  email: string;
  wechat: string;
  country: string;
  eventSource: string;
  productInterest: string;
  notes: string;
  aiBriefing: string;
  status: string;
};

export default function LeadDetailPage() {
  const params = useParams();
  const [lead, setLead] = useState<Lead | null>(null);

  useEffect(() => {
    const savedLeads = JSON.parse(
      localStorage.getItem("blackboothai-leads") || "[]"
    );

    const foundLead = savedLeads.find(
      (item: Lead) => item.id === params.id
    );

    setLead(foundLead || null);
  }, [params.id]);

  if (!lead) {
    return (
      <main className="min-h-screen bg-black text-white flex">
        <Sidebar />

        <section className="flex-1 p-8">
          <h1 className="text-4xl font-bold">Lead Not Found</h1>
          <p className="text-zinc-400 mt-2">
            This lead does not exist in local storage.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <section className="flex-1 p-8">
        <div className="mb-10">
          <p className="text-zinc-500 mb-2">Lead Profile</p>
          <h1 className="text-4xl font-bold">{lead.name}</h1>
          <p className="text-zinc-400 mt-2">
            {lead.company} · {lead.country} · {lead.eventSource}
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-3">
                AI Relationship Briefing
              </h2>
              <p className="text-zinc-300 leading-7 whitespace-pre-line">
                {lead.aiBriefing || "No AI briefing generated yet."}
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-3">
                Conversation Notes
              </h2>
              <p className="text-zinc-300 leading-7">
                {lead.notes || "No notes added yet."}
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4">
                Prep Before Contact
              </h2>

              <ul className="space-y-3 text-zinc-300">
                <li>• Reference the specific product interest.</li>
                <li>• Confirm MOQ, pricing, and delivery timeline.</li>
                <li>• Keep discount authority controlled.</li>
                <li>• Recommend a follow-up meeting if buyer intent is strong.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4">Lead Status</h2>

              <p>
                <span className="text-zinc-500">Status:</span>{" "}
                <span className="text-green-400 font-semibold">
                  {lead.status}
                </span>
              </p>

              <p className="mt-3">
                <span className="text-zinc-500">Product:</span>{" "}
                {lead.productInterest}
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4">Contact Info</h2>

              <div className="space-y-3 text-zinc-300">
                <p>Email: {lead.email || "Not added"}</p>
                <p>WeChat: {lead.wechat || "Not added"}</p>
                <p>Country: {lead.country || "Not added"}</p>
              </div>
            </div>

            <button className="w-full bg-white text-black px-5 py-3 rounded-xl font-semibold">
              Generate Follow-Up Draft
            </button>

            <button className="w-full bg-zinc-800 text-white px-5 py-3 rounded-xl font-semibold">
              Schedule Meeting
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}