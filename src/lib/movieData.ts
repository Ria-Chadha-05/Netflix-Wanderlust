// ─── WANDERLUST — DREAM DESTINATIONS ──────────────────────────────────────

export type MediaItem = { type: "video" | "image"; src: string; poster?: string };
export type Episode   = { num: number; title: string; duration: string; desc: string; thumb: string; media: MediaItem };
export type Credit    = { role: string; name: string };

export type Story = {
  featured: {
    title: string; tagline: string; description: string;
    badge: string; rating: string; year: string; seasons: string; backdrop: string;
  };
  photoFolder: string;
  episodes: Episode[];
  credits: Credit[];
  closingMessage: string;
  closingSub: string;
  recent?: string[];
  myList?: string[];
};

export type Profile = { id: string; name: string; avatar: string; story: Story };

// All IDs sourced directly from live Unsplash search result pages (img src attributes)
const u = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&auto=format&fit=crop&q=85`;

// ─── LAKSHADWEEP ─────────────────────────────────────────────────────────
const LAK_ISLET       = u("1572431447238-425af66a273b"); // islet on sea — confirmed og:image
const LAK_AERIAL      = u("1572025310208-2fd6b91764c1"); // aerial island daytime — confirmed og:image
const LAK_RUNWAY      = u("1572025600482-08238b1ed5a3"); // aerial island with runway — same series
const LAK_NIGHT       = u("1507525428034-b723cf961d3e"); // tropical beach night — confirmed Unsplash
const LAK_LAGOON      = u("1583212292454-1f6229963f11"); // turquoise lagoon overhead

// ─── GREECE / SANTORINI ───────────────────────────────────────────────────
const GR_OIA_PATH     = u("1613395877344-13d4a8e0d49e"); // Tânia Mousinho — blue & white building by caldera (result #2)
const GR_SUNSET_OIA   = u("1580502304784-8985b7eb7260"); // James Ting — houses on mountain near sea at sunset (result #6)
const GR_BLUE_DOME    = u("1678266561093-324802646fb2"); // Chloé Lefleur — blue dome building on cliff (result #3)
const GR_POOL_VIEW    = u("1604145195376-e2c8195adf29"); // Philip Jahn — terrace table chairs overlooking sea (result #15)
const GR_STEPS        = u("1533105079780-92b9be482077"); // Ryan Spencer — whitewashed Santorini steps (result #7)
const GR_WINDMILL     = u("1601581875309-fafbf2d3ed3a"); // Johnny Africa — white/brown buildings near sea (result #12)

// ─── ICELAND ─────────────────────────────────────────────────────────────
const ICE_AURORA1     = u("1488415032361-b7e238421f1b"); // Jonatan Pie — snow mountain with aurora (result #2)
const ICE_AURORA2     = u("1488415032361-b7e238421f1b"); // same — Jonatan Pie green aurora
const ICE_CANYON      = u("1517411032315-54ef2cb783bb"); // Luke Stackpoole — person near water aurora northern sky (result #6)
const ICE_WATERFALL   = u("1518156959312-07a5380c1261"); // Balazs Busznyak — people at base of waterfall (result #3)
const ICE_GLACIER     = u("1475518845976-0fd87b7e4e5d"); // v2osk — aurora borealis (result #8)
const ICE_HOT_SPRING  = u("1509529711801-deac231925ac"); // Joshua Earle — man beside water with aurora (result #4)
const ICE_ROAD        = u("1525340581945-d5e2b09641c4"); // Luke Stackpoole — person standing under sky lights (result #10)

// ─── AUSTRALIA ────────────────────────────────────────────────────────────
const AUS_OPERA       = u("1529108190281-9a4f620bc2d8"); // Photoholgic — Sydney Opera House (confirmed uluru/opera search)
const AUS_OPERA2      = u("1551955682-78a3c53ab544"); // Johnny Bhalla — Bondi Beach people (Bondi search result #2)
const AUS_BONDI       = u("1582076197950-7a1dcdd1e07f"); // Jay Wennington — people on beach (Bondi search result #3)
const AUS_ULURU       = u("1557214997-7eae7e0e7aaa"); // Antoine Fabre — Ayers Rock Australia (Uluru search result #3)
const AUS_REEF        = u("1584868138762-fcae9e7d55b2"); // Kelvin Li — Bondi Icebergs pool beside ocean (result #4)
const AUS_OUTBACK     = u("1605235904827-2fc511a86dd0"); // Michael Jerrard — brown mountain blue sky (Uluru search result #8)
const AUS_KOALA       = u("1554869284-9e692207599b"); // Clarinta — Bondi Icebergs pool near sea (result #12)

// ══════════════════════════════════════════════════════════════════════════
export const PROFILES: Profile[] = [

  // ── 1. LAKSHADWEEP ─────────────────────────────────────────────────────
  {
    id: "lakshadweep",
    name: "lakshadweep",
    avatar: LAK_AERIAL,
    story: {
      featured: {
        title: "The Coral Kingdom",
        tagline: "India's secret paradise — where the water is more blue than the sky.",
        description: "36 islands. Infinite shades of turquoise. Lakshadweep is India's smallest union territory and its most breathtaking secret — a coral archipelago where the Arabian Sea glows like glass.",
        badge: "N SERIES • S1", rating: "TV-G", year: "2024", seasons: "Destination 1",
        backdrop: u("1572431447238-425af66a273b", 1600),
      },
      photoFolder: "lakshadweep",
      episodes: [
        {
          num: 1, title: "First Sight of the Lagoon", duration: "4m",
          desc: "The moment the plane descends and you see the lagoon from above — that blinding, impossible turquoise stretching between islands — you understand immediately why people call this place unreal.",
          thumb: LAK_AERIAL,
          media: { type: "image", src: u("1572025310208-2fd6b91764c1", 1200) },
        },
        {
          num: 2, title: "Agatti Island", duration: "4m",
          desc: "The runway at Agatti runs alongside the beach. You land and the sea is immediately right there — no transition, no buildup. Just reef, coral, and the clearest water you will ever wade through.",
          thumb: LAK_RUNWAY,
          media: { type: "image", src: u("1572025600482-08238b1ed5a3", 1200) },
        },
        {
          num: 3, title: "Under the Surface", duration: "5m",
          desc: "The coral reefs of Lakshadweep are among the best-preserved in the world. Below the surface: fish in colours you didn't know existed, coral gardens, and a silence that makes the world above feel impossibly loud.",
          thumb: LAK_ISLET,
          media: { type: "image", src: u("1572431447238-425af66a273b", 1200) },
        },
        {
          num: 4, title: "Sunset at the Edge of India", duration: "3m",
          desc: "No city lights. No traffic noise. Just the Arabian Sea turning gold and pink, fishermen rowing back, and the kind of quiet that makes you recalibrate everything you thought you needed.",
          thumb: LAK_NIGHT,
          media: { type: "image", src: u("1507525428034-b723cf961d3e", 1200) },
        },
      ],
      credits: [
        { role: "Location", name: "Lakshadweep, India" },
        { role: "Best time to visit", name: "October – May" },
        { role: "Don't miss", name: "Agatti, Bangaram, Kavaratti" },
        { role: "Permit required", name: "Yes — apply in advance" },
        { role: "Known for", name: "Coral reefs, lagoons, zero crowds" },
      ],
      closingMessage: "India's most beautiful secret. 🪸",
      closingSub: "Pack light. Arrive wide-eyed.",
      recent: [
        LAK_ISLET,
        LAK_AERIAL,
        LAK_RUNWAY,
        LAK_NIGHT,
      ],
    },
  },

  // ── 2. GREECE ──────────────────────────────────────────────────────────
  {
    id: "greece",
    name: "greece",
    avatar: GR_BLUE_DOME,
    story: {
      featured: {
        title: "Gods, Domes & Sunsets",
        tagline: "Where every alley leads to a view and every sunset is a standing ovation.",
        description: "Santorini's iconic white walls and cobalt domes. Athens' ancient light. Mykonos' narrow marble streets. Greece is every travel photo you've ever saved, finally stepping off the screen.",
        badge: "N SERIES • S2", rating: "TV-G", year: "2024", seasons: "Destination 2",
        backdrop: u("1613395877344-13d4a8e0d49e", 1600),
      },
      photoFolder: "greece",
      episodes: [
        {
          num: 1, title: "Oia at First Light", duration: "4m",
          desc: "Walk the cliffside path before the crowds arrive. The whitewashed houses catch the early sun, the caldera glimmers 300 metres below, and for a moment Santorini is entirely yours.",
          thumb: GR_OIA_PATH,
          media: { type: "image", src: u("1613395877344-13d4a8e0d49e", 1200) },
        },
        {
          num: 2, title: "The Blue Domes", duration: "3m",
          desc: "There are exactly three things you must photograph in Santorini and they're all in the same frame: white walls, blue domes, and the endless Aegean behind them. You'll take 400 photos. All of them good.",
          thumb: GR_BLUE_DOME,
          media: { type: "image", src: u("1678266561093-324802646fb2", 1200) },
        },
        {
          num: 3, title: "The Caldera Sunset", duration: "5m",
          desc: "Oia sunset is world-famous for a reason. Hundreds of people line the walls, champagne in hand. The sun drops into the caldera — orange, then red, then gone — and everyone applauds. Every single evening.",
          thumb: GR_SUNSET_OIA,
          media: { type: "image", src: u("1580502304784-8985b7eb7260", 1200) },
        },
        {
          num: 4, title: "Infinity Pool Afternoons", duration: "3m",
          desc: "The cave hotels of Imerovigli have pools built into the cliffside, looking directly over the caldera. Floating there, with the Aegean stretching to the horizon, is one of the finest afternoons available to the human species.",
          thumb: GR_POOL_VIEW,
          media: { type: "image", src: u("1604145195376-e2c8195adf29", 1200) },
        },
        {
          num: 5, title: "The Windmills of Oia", duration: "3m",
          desc: "These 16th-century Venetian windmills perched above the caldera are the last thing you photograph and the first thing you miss. Santorini has a way of doing that.",
          thumb: GR_WINDMILL,
          media: { type: "image", src: u("1601581875309-fafbf2d3ed3a", 1200) },
        },
      ],
      credits: [
        { role: "Location", name: "Santorini & Mykonos, Greece" },
        { role: "Best time to visit", name: "April – June, September – October" },
        { role: "Don't miss", name: "Oia sunset, Fira caldera walk, Akrotiri ruins" },
        { role: "Getting there", name: "Fly into Santorini (JTR)" },
        { role: "Known for", name: "White architecture, sunsets, Aegean blue" },
      ],
      closingMessage: "Every sunset here earns a standing ovation. 🌅",
      closingSub: "Greece will ruin every other sunset for you.",
      recent: [
        GR_BLUE_DOME,
        GR_OIA_PATH,
        GR_SUNSET_OIA,
        GR_POOL_VIEW,
        GR_STEPS,
        GR_WINDMILL,
      ],
      myList: [
        GR_SUNSET_OIA,
        GR_BLUE_DOME,
        GR_OIA_PATH,
      ],
    },
  },

  // ── 3. ICELAND ─────────────────────────────────────────────────────────
  {
    id: "iceland",
    name: "iceland",
    avatar: ICE_AURORA2,
    story: {
      featured: {
        title: "Fire, Ice & the Northern Sky",
        tagline: "A planet that forgot to be ordinary.",
        description: "Volcanoes and glaciers side by side. Waterfalls that fall into nowhere. And on winter nights, the sky turns green and purple and dances. Iceland is not a destination — it's an experience that permanently changes your sense of what Earth can look like.",
        badge: "N SERIES • S3", rating: "TV-G", year: "2024", seasons: "Destination 3",
        backdrop: u("1488415032361-b7e238421f1b", 1600),
      },
      photoFolder: "iceland",
      episodes: [
        {
          num: 1, title: "The Northern Lights", duration: "6m",
          desc: "You drive out past the city lights at midnight. The sky is black and then — slowly — a green curtain starts to move. Then it pulses. Then it explodes. The Northern Lights are not a sight. They are an event.",
          thumb: ICE_AURORA2,
          media: { type: "image", src: u("1488415032361-b7e238421f1b", 1200) },
        },
        {
          num: 2, title: "Aurora in the Canyon", duration: "4m",
          desc: "Stakkholtsgja canyon at midnight, with the aurora bursting overhead and the canyon walls lit by torchlight. One of those images that people assume is edited. It isn't.",
          thumb: ICE_CANYON,
          media: { type: "image", src: u("1517411032315-54ef2cb783bb", 1200) },
        },
        {
          num: 3, title: "Skógafoss", duration: "4m",
          desc: "Standing at the base of Skógafoss, Iceland's most thunderous waterfall, in the spray and the rainbow and the roar. Behind it: a hidden staircase, a legendary Viking treasure, and a view of the South Coast you'll never forget.",
          thumb: ICE_WATERFALL,
          media: { type: "image", src: u("1518156959312-07a5380c1261", 1200) },
        },
        {
          num: 4, title: "Jökulsárlón Glacier Lagoon", duration: "4m",
          desc: "Icebergs the colour of sapphires, calved from Vatnajökull glacier, floating silently out to sea. The lagoon at Jökulsárlón is so blue it looks post-processed. It looks like that in real life.",
          thumb: ICE_GLACIER,
          media: { type: "image", src: u("1475518845976-0fd87b7e4e5d", 1200) },
        },
        {
          num: 5, title: "The Blue Lagoon", duration: "3m",
          desc: "Milky, geothermal, 38°C — and surrounded by black lava fields. The Blue Lagoon is touristy and worth every bit of it. There's a silica mud mask station in the middle. Nothing makes sense here. That's the point.",
          thumb: ICE_HOT_SPRING,
          media: { type: "image", src: u("1509529711801-deac231925ac", 1200) },
        },
        {
          num: 6, title: "The Ring Road", duration: "5m",
          desc: "Route 1. The Ring Road. 1,332km of volcanoes, waterfalls, hot springs, lava fields and black sand beaches. Drive it in summer when the sun doesn't set. Drive it in winter for the aurora. Drive it either way.",
          thumb: ICE_ROAD,
          media: { type: "image", src: u("1525340581945-d5e2b09641c4", 1200) },
        },
      ],
      credits: [
        { role: "Location", name: "Iceland" },
        { role: "Best time for Aurora", name: "September – March" },
        { role: "Best time for Midnight Sun", name: "June – July" },
        { role: "Don't miss", name: "Ring Road, Jökulsárlón, Skógafoss, Blue Lagoon" },
        { role: "Known for", name: "Northern Lights, glaciers, volcanoes, waterfalls" },
      ],
      closingMessage: "The sky here dances. Seriously. 🌌",
      closingSub: "You will want to move here. You have been warned.",
      recent: [
        ICE_AURORA1,
        ICE_AURORA2,
        ICE_CANYON,
        ICE_WATERFALL,
        ICE_GLACIER,
        ICE_HOT_SPRING,
        ICE_ROAD,
      ],
    },
  },

  // ── 4. AUSTRALIA ──────────────────────────────────────────────────────
  {
    id: "australia",
    name: "australia",
    avatar: AUS_OPERA,
    story: {
      featured: {
        title: "The Wide Open South",
        tagline: "A continent that does everything at a scale you can't prepare for.",
        description: "Sydney's iconic harbour, the ancient red silence of Uluru, the Great Barrier Reef's underwater universe, the great open outback. Australia is absurdly large, absurdly beautiful, and impossible to do in one trip.",
        badge: "N SERIES • S4", rating: "TV-G", year: "2024", seasons: "Destination 4",
        backdrop: u("1529108190281-9a4f620bc2d8", 1600),
      },
      photoFolder: "australia",
      episodes: [
        {
          num: 1, title: "Sydney Opera House", duration: "4m",
          desc: "Morning at Circular Quay. The ferries are running, the Harbour Bridge stands to your left, and the Opera House — impossibly white, impossibly beautiful — is right there. Fifteen minutes from the airport and already the city has made its point.",
          thumb: AUS_OPERA,
          media: { type: "image", src: u("1529108190281-9a4f620bc2d8", 1200) },
        },
        {
          num: 2, title: "Bondi Beach", duration: "4m",
          desc: "A beach so famous it should feel like a disappointment. It doesn't. Bondi is white sand, green waves, surfers, lifeguards in the yellow and red, and the world's most beautiful walk along the coastal path to Coogee.",
          thumb: AUS_BONDI,
          media: { type: "image", src: u("1582076197950-7a1dcdd1e07f", 1200) },
        },
        {
          num: 3, title: "Uluru at Sunrise", duration: "5m",
          desc: "Standing before Uluru at dawn as it shifts from black to purple to a burning, deep red. This sandstone monolith rises 348 metres from a completely flat desert. 550 million years old. Sacred to the Anangu people. Absolutely overwhelming.",
          thumb: AUS_ULURU,
          media: { type: "image", src: u("1557214997-7eae7e0e7aaa", 1200) },
        },
        {
          num: 4, title: "The Great Barrier Reef", duration: "5m",
          desc: "The world's largest living structure. Seen from above: a vast network of turquoise and green running along the Queensland coast. Seen from below: a universe of colour, life, and coral that took thousands of years to build.",
          thumb: AUS_REEF,
          media: { type: "image", src: u("1584868138762-fcae9e7d55b2", 1200) },
        },
        {
          num: 5, title: "The Red Outback", duration: "4m",
          desc: "Drive west from Adelaide. The land turns red. The sky turns enormous. There are no towns, no signals, no other cars. Just you and the ancient, burnt-orange earth of the Australian interior — a silence so large it echoes.",
          thumb: AUS_OUTBACK,
          media: { type: "image", src: u("1605235904827-2fc511a86dd0", 1200) },
        },
        {
          num: 6, title: "Wildlife That Shouldn't Exist", duration: "3m",
          desc: "Kangaroos that box. Koalas that sleep 20 hours a day. Platypuses. Wombats. The quokka — the happiest animal alive. Australia has the most baffling collection of wildlife on Earth and all of it is aggressively photogenic.",
          thumb: AUS_KOALA,
          media: { type: "image", src: u("1554869284-9e692207599b", 1200) },
        },
      ],
      credits: [
        { role: "Location", name: "Australia" },
        { role: "Best time to visit", name: "September – November, March – May" },
        { role: "Don't miss", name: "Sydney, Uluru, Great Barrier Reef, Great Ocean Road" },
        { role: "Getting there", name: "Direct flights from major Indian cities" },
        { role: "Known for", name: "Opera House, Uluru, reef, outback, wildlife" },
      ],
      closingMessage: "A continent worth crossing the world for. 🦘",
      closingSub: "One trip is never enough.",
      recent: [
        AUS_OPERA,
        AUS_OPERA2,
        AUS_BONDI,
        AUS_ULURU,
        AUS_REEF,
        AUS_OUTBACK,
        AUS_KOALA,
      ],
      myList: [
        AUS_OPERA,
        AUS_ULURU,
        AUS_REEF,
        AUS_BONDI,
      ],
    },
  },
];

export const STORY = PROFILES[0].story;
