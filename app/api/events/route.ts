import { IEvent } from "@/common/interfaces";
import { NextResponse } from "next/server";

const events: IEvent[] = [
  {
    id: "christmas-market-2023",
    date: "24/11/2023",
    title: "Krakow's Winter Charm: Exploring the Christmas Market",
    preview:
      "Krakow's 13th century Market Square with its majestic Cloth Hall and towering St Mary's Basilica, provides the perfect backdrop to this most traditional of Christmas Markets.",
    description:
      "As usual, on the Main Market Square, merchants present myriad festive decorations and gifts, such as hand-painted baubles, wreaths, wax candles, nativity scenes, ceramics, hay, straw, wood, wool and felt trinkets, jewellery, souvenirs, postcards, calendars, wooden toys and kitchen utensils, leather goods and sheepskin coats. And of course there will be plenty of festive delicacies: roast nuts, fudge, honey, cakes and biscuits, traditional gingerbread... Visitors can also feast on Polish grilled snacks, pierogi, soups and traditional mulled wine. As usual, the Christmas Fair will be accompanied by plenty of artistic events. The fair is one of the most popular events with locals and tourists alike, and it is one of the city's flagship promotional events.",
    tags: ["Old town", "Main Square", "Christmas Market"],
    location: {
      lat: 50.06190678181494,
      lng: 19.93675426432058,
    },
    image: "/images/christmas-market.jpg",
    created: "20/11/2023",
  },
];

export async function GET() {
  return NextResponse.json(events);
}
