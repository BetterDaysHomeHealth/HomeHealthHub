export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'Missing query' });

  const token = process.env.MAPBOX_TOKEN;
  if (!token) return res.status(500).json({ error: 'Mapbox not configured' });

  try {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(q)}.json?access_token=${token}&types=address&country=us&proximity=-76.0,37.0`;
    const response = await fetch(url);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
