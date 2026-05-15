import Sidebar from "@/components/Sidebar";

export default function LeadDetailPage() {
  return (
    <main className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <section className="flex-1 p-8">
        <div className="mb-10">
          <p className="text-zinc-500 mb-2">Lead Profile</p>
          <h1 className="text-4xl font-bold">Carlos Mendes</h1>
          <p className="text-zinc-400 mt-2">
            Mendes Home Imports · Brazil · CIFF Guangzhou
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-3">AI Relationship Briefing</h2>
              <p className="text-zinc-300 leading-7">
                Carlos appears to be a serious buyer interested in OEM furniture
                manufacturing, specifically oak dining tables. He asked about MOQ,
                FOB pricing, shipping timelines, and recurring quarterly orders.
                The lead is price sensitive but shows strong buying intent.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4">Conversation Timeline</h2>

              <div className="space-y-4">
                <div className="border-l-2 border-green-500 pl-4">
                  <p className="font-semibold">Met at CIFF Guangzhou</p>
                  <p className="text-zinc-400">
                    Discussed OEM furniture, MOQ, and shipping concerns.
                  </p>
                </div>

                <div className="border-l-2 border-blue-500 pl-4">
                  <p className="font-semibold">Catalog follow-up drafted</p>
                  <p className="text-zinc-400">
                    AI recommends sending catalog and FOB price range within 24 hours.
                  </p>
                </div>

                <div className="border-l-2 border-yellow-500 pl-4">
                  <p className="font-semibold">Negotiation note</p>
                  <p className="text-zinc-400">
                    Buyer may request 7–10% discount. Maintain margin floor.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4">Prep Before Contact</h2>

              <ul className="space-y-3 text-zinc-300">
                <li>• Mention oak dining table samples first.</li>
                <li>• Be ready to discuss MOQ and FOB pricing.</li>
                <li>• Avoid offering more than 10% discount without approval.</li>
                <li>• Recommend a video meeting within 72 hours.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4">Lead Status</h2>

              <div className="space-y-3">
                <p>
                  <span className="text-zinc-500">Status:</span>{" "}
                  <span className="text-green-400 font-semibold">Hot Lead</span>
                </p>

                <p>
                  <span className="text-zinc-500">Score:</span>{" "}
                  <span className="font-semibold">87/100</span>
                </p>

                <p>
                  <span className="text-zinc-500">Next Action:</span>{" "}
                  Send quotation draft
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4">Contact Info</h2>

              <div className="space-y-3 text-zinc-300">
                <p>Email: carlos@mendeshome.com</p>
                <p>WeChat: carlos_mendes88</p>
                <p>Country: Brazil</p>
                <p>Language: English / Portuguese</p>
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