export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.image) {
      return Response.json(
        { success: false, error: "No image provided" },
        { status: 400 }
      );
    }

    // Temporary mocked extraction.
    // Next step: replace this with Orbital API photo recognition.
    return Response.json({
      success: true,
      lead: {
        name: "Carlos Mendes",
        company: "Mendes Home Imports",
        email: "carlos@mendeshome.com",
        wechat: "carlos_mendes88",
        country: "Brazil",
        eventSource: "CIFF Guangzhou",
        productInterest: "OEM furniture manufacturing, oak dining tables",
        notes:
          "Extracted from uploaded photo. Buyer appears interested in MOQ, FOB pricing, shipping timeline, and possible quarterly orders.",
      },
    });
  } catch {
    return Response.json(
      { success: false, error: "Failed to extract photo" },
      { status: 500 }
    );
  }
}