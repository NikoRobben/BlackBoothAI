"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function NewLeadPage() {
  const [lead, setLead] = useState({
    name: "",
    company: "",
    email: "",
    wechat: "",
    country: "",
    eventSource: "",
    productInterest: "",
    notes: "",
  });

  const [aiBriefing, setAiBriefing] = useState("");

  function updateField(field: string, value: string) {
    setLead((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function simulateAIExtract() {
    setLead({
      name: "Carlos Mendes",
      company: "Mendes Home Imports",
      email: "carlos@mendeshome.com",
      wechat: "carlos_mendes88",
      country: "Brazil",
      eventSource: "CIFF Guangzhou",
      productInterest: "OEM furniture manufacturing, oak dining tables",
      notes:
        "Buyer asked about MOQ, FOB pricing, shipping timeline, and possible quarterly orders. Appears price sensitive but serious.",
    });
  }

  function generateLocalBriefing() {
    setAiBriefing(
      `Relationship Summary:
${lead.name || "This buyer"} appears interested in ${lead.productInterest || "the discussed products"}. They should be treated as a warm to hot lead based on the conversation notes.

Buyer Intent:
Warm / Hot

Recommended Next Action:
Send a personalized follow-up with product details, MOQ, FOB pricing range, and suggest a meeting within 48–72 hours.

Before Contact:
Review pricing limits, avoid over-discounting, and reference their specific product interest so the message feels personal.`
    );
  }

  function saveLead() {
    const savedLeads = JSON.parse(
      localStorage.getItem("blackboothai-leads") || "[]"
    );

    const newLead = {
      id: Date.now().toString(),
      ...lead,
      aiBriefing,
      status: "New Lead",
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "blackboothai-leads",
      JSON.stringify([newLead, ...savedLeads])
    );

    window.location.href = "/leads";
  }

  return (
    <main className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <section className="flex-1 p-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold">Add New Lead</h1>

            <p className="text-zinc-400 mt-2">
              Upload trade show contacts and let BlackBoothAI prepare the lead
              profile.
            </p>
          </div>

          <button
            type="button"
            onClick={simulateAIExtract}
            className="bg-white text-black px-5 py-3 rounded-xl font-semibold"
          >
            Simulate AI Extract
          </button>
        </div>

        <form className="max-w-4xl space-y-6">
          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
            <label className="block text-sm text-zinc-400 mb-2">
              Business Card / WeChat Screenshot / Notes Upload
            </label>

            <input
              type="file"
              className="w-full rounded-xl bg-zinc-800 border border-zinc-700 p-4"
            />

            <p className="text-zinc-500 text-sm mt-3">
              Later this will auto-extract name, company, email, WeChat ID,
              country, product interest, and conversation context.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              value={lead.name}
              onChange={(e) => updateField("name", e.target.value)}
              className="bg-zinc-900 rounded-xl p-4 border border-zinc-800"
              placeholder="Full Name"
            />

            <input
              value={lead.company}
              onChange={(e) => updateField("company", e.target.value)}
              className="bg-zinc-900 rounded-xl p-4 border border-zinc-800"
              placeholder="Company"
            />

            <input
              value={lead.email}
              onChange={(e) => updateField("email", e.target.value)}
              className="bg-zinc-900 rounded-xl p-4 border border-zinc-800"
              placeholder="Email"
            />

            <input
              value={lead.wechat}
              onChange={(e) => updateField("wechat", e.target.value)}
              className="bg-zinc-900 rounded-xl p-4 border border-zinc-800"
              placeholder="WeChat ID"
            />

            <input
              value={lead.country}
              onChange={(e) => updateField("country", e.target.value)}
              className="bg-zinc-900 rounded-xl p-4 border border-zinc-800"
              placeholder="Country"
            />

            <input
              value={lead.eventSource}
              onChange={(e) => updateField("eventSource", e.target.value)}
              className="bg-zinc-900 rounded-xl p-4 border border-zinc-800"
              placeholder="Event Source"
            />
          </div>

          <input
            value={lead.productInterest}
            onChange={(e) =>
              updateField("productInterest", e.target.value)
            }
            className="w-full bg-zinc-900 rounded-xl p-4 border border-zinc-800"
            placeholder="Product Interest"
          />

          <textarea
            value={lead.notes}
            onChange={(e) => updateField("notes", e.target.value)}
            className="w-full bg-zinc-900 rounded-xl p-4 min-h-36 border border-zinc-800"
            placeholder="Conversation notes: MOQ, price, timeline, samples, buyer concerns, negotiation context..."
          />

          <button
            type="button"
            onClick={generateLocalBriefing}
            className="bg-zinc-800 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Generate AI Briefing
          </button>

          {aiBriefing && (
            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 whitespace-pre-line">
              <h2 className="text-xl font-bold mb-4">
                AI Relationship Briefing
              </h2>

              <p className="text-zinc-300 leading-7">
                {aiBriefing}
              </p>
            </div>
          )}

          <button
            type="button"
            onClick={saveLead}
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
          >
            Save Lead
          </button>
        </form>
      </section>
    </main>
  );
}