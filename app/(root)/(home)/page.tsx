import React from "react";

const Home = ({ params }: { params: { id: string } }) => {
  return <div>Meeting Room: #{params.id}</div>;
};

export default Home;
