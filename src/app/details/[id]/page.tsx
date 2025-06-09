"use client";
import "../details.scss";
import DetailsPage from "../../components/templates/DetailsPage/DetailsPage";

const Details = ({ params }: { params: Promise<{ id: string }> }) => {
  return <DetailsPage params={params}/>
};

export default Details;