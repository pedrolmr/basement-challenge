import type {NextPage} from "next";

import Landing from "../components/Landing";

const Home: NextPage = () => {
  return (
    <div className="h-full flex bg-black">
      <Landing />
    </div>
  );
};

export default Home;
