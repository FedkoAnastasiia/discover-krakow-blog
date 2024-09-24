import { IPost } from "@/common/interfaces";

const posts: IPost[] = [
  {
    id: "schindler's-factory",
    title: "Schindler's Factory",
    image: "/images/schindler-factory.jpeg",
    created: "2023-12-23",
    preview:
      "World-known thanks to Spielberg's film \"Schindler's List\", Oskar Schindler's Factory of Enameled Vessels (Muzeum Schindlera in Polish) is an important monument in Krakow. During the Nazi occupation, Schindler saved over 1,200 Jews by hiring them to work in his plant.",
    description:
      "The Schindler's factory presents an exhibition commemorating the fate of Krakow and its inhabitants during the occupation in 1939-1945. During World War II, Schindler employed Jews who were threatened with extermination. In 1944, together with his accountant, he prepared the famous \"Schindler's List\", on the basis of which he bought and then transported over 1,100 Jewish workers to the territory of today's Czech Republic, thus saving them from extermination. The place itself was popularized by 1993 film \"Schinler's List\" by Stephen Spielberg picturing Oskar Schindler saving Jews during World War II. The museum is located in the original factory building. The exhibition Krakow - Occupation 1939-1945 is presented here. The individual thematic sections show, among others, the fate of Krakow's Jews, the role of Krakow as the center of power of the General Government and the everyday life of its inhabitants. The exhibition is so popular that the museum itself recommends booking tickets online in advance to avoid long queues. Schindler's Factory is managed by the Historical Museum of the City of Krakow and the Museum of Contemporary Art.",
    location: [50.04741729522085, 19.96159608922471],
    tags: ["Schindler"],
  },
  {
    id: "wawel-royal-castle",
    title: "Wawel Royal Castle",
    image: "/images/wawel-castle.webp",
    created: "2023-12-07",
    preview:
      "Towering over Wawel Hill, Wawel Royal Castle is one of the most beautiful constructions around the world and the iconic symbol of Poland.",
    description:
      "Wawel Royal Castle is one of the top highlights in Kraków. Inscribed on the UNESCO World Heritage List it is one of the most visited places in Krakow. For centuries, it was the seat of Polish kings and a symbol of statehood. In 1930 the Castle also became one of the most important museums in Poland. The museum collects works of art historically or artistically related to Wawel, with Polish rulers, and great magnate collections.It collects paintings, prints, sculptures, fabrics, goldsmiths, militaria, porcelain and furniture. The chambers exhibit the famous tapestries of Zygmunt August and wonderful Italian Renaissance paintings from the Lanckoroński collection, and the Wawel collections of eastern art contain the most important and largest collection of tents in Europe. The castle is divided into several exhibitions: permanent and seasonal, it also organizes temporary exhibitions. There are six permanent exhibitions - Representative Royal Chambers and Private Royal Apartments, the Crown Treasury and the Armory, Oriental Art, The Lost Wawel and Wawel Recovered.",
    location: [50.054148235242735, 19.93540425216292],
    tags: ["Old town", "Wawel Castle"],
  },
  {
    id: "krakow-main-square",
    title: "Krakow Main Square",
    image: "/images/rynek-glowny.jpg",
    created: "2023-12-18",
    preview:
      "The Main Square, also known as Main Market Square, is the biggest Medieval plaza in Europe. Its 40,000 square meters are truly astonishing.",
    description:
      "The Krakow Main Square is Europe's largest medieval square. It has the shape of a square exceeding 200 meters on each side. St. Mary's Church towers over the Royal Market Square. Every hour a bugle call is played live by trumpeters from the higher tower of the church, called Hejnalica. In the middle of the square there is the Cloth Hall. There is the department of the National Museum on the first floor. On the eastern side of the Main Square, between the Cloth Hall and the exit of Sienna Street there is Adam Mickiewicz monument - a place of meetings, performances by street artists, and a landmark on the Krakow market square. The 70-meter-high Town Hall Tower located on the Market Square offers a wide panorama of the city, while inside is a branch of the Historical Museum of the City of Krakow. There are many beautiful tenement houses around the square, which add charm to this place. Many of them have restaurants, pubs, also outside. Under the Market Square, there is the Main Market Underground, made available to visitors in 2010 as a branch of the Historical Museum of the City of Krakow. The entrance to them is in the Cloth Hall.",
    location: [50.06190678181494, 19.93675426432058],
    tags: ["Old town", "Main Square"],
  },
];

export default posts;
