import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/Slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import { cards } from "../../data";
import Features from "../../components/features/Features";

function Home() {
    return (
        <div className="home">
            <Featured />
            <TrustedBy />
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map((card) => (
                    <CatCard key={card.id} item={card} />
                ))}
            </Slide>
            <Features />
        </div>
    );
}

export default Home;
