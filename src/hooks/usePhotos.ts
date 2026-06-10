// Gallery photos per destination — all verified Unsplash IDs.
const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=600&auto=format&fit=crop&q=85`;

const MANIFEST: Record<string, string[]> = {

  "lakshadweep": [
    u("1572431447238-425af66a273b"), // islet on sea — Anuj Chauhan
    u("1572025310208-2fd6b91764c1"), // aerial island — Anuj Chauhan
    u("1572025600482-08238b1ed5a3"), // aerial runway — Anuj Chauhan
    u("1507525428034-b723cf961d3e"), // tropical beach night
    u("1583212292454-1f6229963f11"), // clear tropical water
    u("1544551763-46a013bb70d5"), // underwater coral
  ],

  "greece": [
    u("1596391344041-3ee5f0a93a4f"), // Oia path — Charlie M
    u("1580502304784-8985b7eb7260"), // caldera sunset — Tânia Mousinho
    u("1555993539-1732b0258235"), // blue domes
    u("1500916434205-0c77489c6cf7"), // pool view — orva studio
    u("1533105079780-92b9be482077"), // whitewashed steps
    u("1601581975053-7655b73b4a07"), // Santorini alley blue door
    u("1555993539-1732b0258235"), // blue dome II
    u("1506973035872-a4ec16b8e8d9"), // harbour sunset
  ],

  "iceland": [
    u("1488415032361-b7e238421f1b"), // green aurora — Jonatan Pie
    u("1517411032315-54ef2cb783bb"), // canyon aurora — Jonatan Pie
    u("1504893524553-b855bce32c67"), // ring road lava fields
    u("1569431927804-f0a9299f7524"), // black sand beach
  ],

  "australia": [
    u("1506973035872-a4ec16b8e8d9"), // Opera House — Photoholgic
    u("1519681393784-d120267933ba"), // outback red desert
    u("1537151608828-ea2b11777ee8"), // koala
    u("1505155485191-1ad7bb1f63e8"), // kangaroo at dusk
    u("1589823892853-b8dbef6c9a57"), // Great Ocean Road
  ],

};

export function usePhotos(folderName: string): string[] {
  return MANIFEST[folderName] ?? [];
}
