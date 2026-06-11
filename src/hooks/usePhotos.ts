// Gallery photos per destination — all verified Unsplash IDs from live search pages.
const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=600&auto=format&fit=crop&q=85`;

const MANIFEST: Record<string, string[]> = {

  "lakshadweep": [
    u("1572025310208-2fd6b91764c1"), // aerial island — Anuj Chauhan (confirmed og:image)
    u("1572025600482-08238b1ed5a3"), // aerial runway — Anuj Chauhan (same series)
    u("1507525428034-b723cf961d3e"), // tropical beach night
  ],

  "greece": [
    u("1613395877344-13d4a8e0d49e"), // Tânia Mousinho — blue & white building by caldera
    u("1678266561093-324802646fb2"), // Chloé Lefleur — blue dome on cliff
    u("1580502304784-8985b7eb7260"), // James Ting — caldera sunset houses
    u("1533105079780-92b9be482077"), // Ryan Spencer — whitewashed Santorini steps
    u("1604145195376-e2c8195adf29"), // Philip Jahn — terrace table and chairs
    u("1601581875309-fafbf2d3ed3a"), // Johnny Africa — white buildings near sea
    u("1563789031959-4c02bcb41319"), // Dan — white and blue painted building
    u("1530841377377-3ff06c0ca713"), // Jonathan Gallegos — Santorini at sunset
  ],

  "iceland": [
    u("1488415032361-b7e238421f1b"), // Jonatan Pie — snow mountain aurora borealis
    u("1517411032315-54ef2cb783bb"), // Luke Stackpoole — person near water, aurora northern sky
    u("1518156959312-07a5380c1261"), // Balazs Busznyak — people at base of waterfalls
    u("1475518845976-0fd87b7e4e5d"), // v2osk — aurora borealis
    u("1509529711801-deac231925ac"), // Joshua Earle — man beside water with aurora lights
    u("1525340581945-d5e2b09641c4"), // Luke Stackpoole — person standing under sky lights
  ],

  "australia": [
    u("1529108190281-9a4f620bc2d8"), // Photoholgic — Uluru landscape blue sky
    u("1582076197950-7a1dcdd1e07f"), // Jay Wennington — Bondi Beach people
    u("1551955682-78a3c53ab544"), // Johnny Bhalla — Bondi white sand beach
    u("1557214997-7eae7e0e7aaa"), // Antoine Fabre — Ayers Rock
    u("1584868138762-fcae9e7d55b2"), // Kelvin Li — Bondi Icebergs pool by ocean
    u("1605235904827-2fc511a86dd0"), // Michael Jerrard — brown mountain blue sky outback
  ],

};

export function usePhotos(folderName: string): string[] {
  return MANIFEST[folderName] ?? [];
}
