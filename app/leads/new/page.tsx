import Sidebar from "@/components/Sidebar";

export default function NewLeadPage() {
  return (
    <main className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <section className="flex-1 p-8">
        <h1 className="text-4xl font-bold">Add New Lead</h1>
        <p className="text-zinc-400 mt-2 mb-8">
          Upload trade show contact details, business cards, WeChat notes, and buyer context.
        </p>

        <form className="max-w-3xl space-y-6">
          <div className="bg-zinc-900 rounded-2xl p-6">
            <label className="block text-sm text-zinc-400 mb-2">
              Business Card / Screenshot Upload
            </label>
            <input
              type="file"
              className="w-full rounded-xl bg-zinc-800 border border-zinc-700 p-4"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="bg-zinc-900 rounded-xl p-4" placeholder="Full Name" />
            <input className="bg-zinc-900 rounded-xl p-4" placeholder="Company" />
            <input className="bg-zinc-900 rounded-xl p-4" placeholder="Email" />
            <input className="bg-zinc-900 rounded-xl p-4" placeholder="WeChat ID" />
            <input className="bg-zinc-900 rounded-xl p-4" placeholder="Country" />
            <input className="bg-zinc-900 rounded-xl p-4" placeholder="Event Source" />
          </div>

          <textarea
            className="w-full bg-zinc-900 rounded-xl p-4 min-h-32"
            placeholder="Conversation notes: What did they ask about? MOQ, price, timeline, samples, product interest..."
          />

          <button
            type="button"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
          >
            Save Lead
          </button>
        </form>
      </section>
    </main>
  );
}