import React, { useEffect } from "react";
import Banner from "../components/Banner";
import { useGetUsersQuery } from "../Api/Api";
import { Container } from "react-bootstrap";
import Feature from "../components/Feature";
import Popular from "../components/Popular";
import Location from "../components/location";
import Luxury from "../components/Luxury";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user.user);

  useEffect(() => {}, [user]);
  return (
    <div>
      <Banner />
      <Container>
        <Feature />
        <Luxury />
        <Location />
        <Popular />
      </Container>
    </div>
  );
};

export default Home;
