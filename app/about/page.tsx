import Image from "next/image";

import "./page.scss";

const About = () => {
  return (
    <div className="aboutPageContainer">
      <h1>About page</h1>
      <hr />
      <div>
        <Image
          alt={"emblem"}
          src={"/images/emblem_krakow.svg"}
          width={200}
          height={270}
        />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        mollitia earum consequuntur dolorem sint, eius, provident sunt ipsam
        doloremque numquam accusantium odit dolorum rem ab dolores modi fugit
        consectetur iure optio obcaecati libero. Saepe repudiandae quam
        aspernatur eligendi minima exercitationem excepturi eum voluptatem et
        aperiam pariatur ipsam cumque dolore eos at, vero fugit voluptates nemo
        sint debitis odio dolores neque. Iure quidem eaque vero voluptas nam
        voluptates alias sapiente quos consequuntur fuga libero, beatae
        necessitatibus fugiat rem repudiandae soluta dolorem pariatur totam
        minima corrupti quod eum? Quam, excepturi placeat maiores vel eos ea
        voluptatum, repellat rem doloremque quos, assumenda maxime in cupiditate
        sit? Molestiae possimus, quo officia itaque quisquam quos adipisci dicta
        voluptatum neque. Quidem exercitationem laudantium hic eligendi culpa
        veritatis rerum iusto quo commodi, quos distinctio eaque molestiae
        voluptatum ab placeat cumque eveniet ullam. Odit perspiciatis explicabo
        placeat architecto in officiis quia. Quaerat unde aut ad nemo expedita
        sunt?
      </div>
    </div>
  );
};

export default About;
