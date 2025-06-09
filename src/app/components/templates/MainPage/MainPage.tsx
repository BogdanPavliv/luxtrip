"use client";
import Extraordinary from "../../../components/modules/MainPage/Extraordinary";
import MainForm from "../../../components/modules/MainPage/MainForm";
import MainSlider from "../../../components/modules/MainPage/MainSlider";
import LuxuryPackages from "../../../components/modules/MainPage/LuxuryPackages";
import Book from "../../../components/modules/MainPage/Book";
import Why from "../../../components/modules/MainPage/Why";
import Customise from "../../../components/modules/MainPage/Customise";
import Reviews from "../../../components/modules/MainPage/Reviews";

const MainPage = () => {
  return (
    <main className="main padding-none">
      <Extraordinary />
      <div className="extraordinary__content-block">
        <MainForm />
        <MainSlider />
        <div className="content-block__sub-block">
          <div className="content-block__bg-beach"></div>

          <LuxuryPackages />

          <Book />
        </div>
        <div className="content-block__sub-block01">
          <div className="content-block__cloud01"></div>
          <div className="content-block__cloud02"></div>
          <div className="content-block__cloud03"></div>
          <div className="content-block__cloud04"></div>
          <div className="content-block__cloud05"></div>
          <Why />
          <Customise />
        </div>
        <Reviews />
      </div>
    </main>
  );
};

export default MainPage;
