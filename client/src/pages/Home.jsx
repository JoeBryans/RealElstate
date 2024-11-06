import React from "react";
import Banner from "../components/Banner";
import { useGetUsersQuery } from "../Api/Api";
import { Container } from "react-bootstrap";
import Feature from "../components/Feature";
import Popular from "../components/Popular";
import Location from "../components/location";
import Luxury from "../components/Luxury";

const Home = () => {
  const { data, error, isLoading } = useGetUsersQuery();
  console.log(data);
  console.log(error);
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
