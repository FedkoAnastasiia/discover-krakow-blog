import Link from "next/link";

import "./index.scss";

const NoPosts = () => {
  return (
    <div className="emptyContainer">
      <div className="emptyHeader">
        <h2>There are no posts here yet</h2>
      </div>
      <div className="emptyHeader">
        <h4>
          Try choosing a different tag or go to the{" "}
          <Link href={"/"}>home page</Link>
        </h4>
      </div>
    </div>
  );
};

const NotFound = () => {
  return (
    <div className="emptyContainer">
      <div className="emptyHeader">
        <h1> Whoops!</h1>
        <h4>Page not found</h4>
      </div>

      <div className="emptyHeader">
        <h2>Looks like this page went on vacation</h2>
        <h4>
          Try our <Link href={"/"}>homepage</Link> or{" "}
          <Link href={"/about"}> about page</Link>
        </h4>
      </div>
    </div>
  );
};

export { NotFound, NoPosts };
