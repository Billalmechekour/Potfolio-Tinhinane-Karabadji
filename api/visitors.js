// Vercel Serverless Function — proxy for the Abacus visitor counter API
// This avoids CORS issues by calling the external API server-side

const ABACUS_HIT_URL = "https://abacus.jasoncameron.dev/hit/tinhinane-karabadji-portfolio/visits";

export default async function handler(req, res) {
  // Allow CORS from any origin
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const response = await fetch(`${ABACUS_HIT_URL}?t=${Date.now()}`, {
      method: "GET",
      headers: { "Cache-Control": "no-store" },
    });

    if (!response.ok) {
      throw new Error(`Abacus API returned ${response.status}`);
    }

    const data = await response.json();
    return res.status(200).json({ value: data.value });
  } catch (error) {
    console.error("Visitor counter error:", error.message);
    return res.status(500).json({ error: "Counter unavailable" });
  }
}
