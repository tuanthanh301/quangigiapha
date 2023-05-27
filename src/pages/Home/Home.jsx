import React from "react";
import { getImagePath } from "../../helpers/image";
import { HomeWrapper } from "./homeStyle";

const Home = () => {
  return (
    <HomeWrapper>
      <img src={getImagePath("pha-do-dang-cay.jpg")} alt="" />
    </HomeWrapper>
  );
};

export default Home;
