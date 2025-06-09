"use client";
import PageTransition from "../components/general/PageTransition";
import './client-area.scss';
import ClientAreaPage from "../components/templates/ClientAreaPage/ClientAreaPage";

const ClientArea = () => {
  return <ClientAreaPage />
};

export default PageTransition(ClientArea);
