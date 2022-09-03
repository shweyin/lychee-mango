import React, { useState } from "react";
import EatJPG from "../Assets/eat.jpg";
import PancakeJPG from "../Assets/pancake.jpg";
import PeaceJPG from "../Assets/peace.jpg";
import SleepJPG from "../Assets/sleep.jpg";
import SnowJPG from "../Assets/snow.jpg";
import SomedayJPG from "../Assets/someday.jpg";
import TakoJPG from "../Assets/tako.jpg";
import TeethJPG from "../Assets/teeth.jpg";

const pics = [
    EatJPG,
    PancakeJPG,
    PeaceJPG,
    SleepJPG,
    SnowJPG,
    SomedayJPG,
    TakoJPG,
    TeethJPG,
];

const Shweyin = () => {
    return (
        <div className="w-[80%] m-auto p-12 flex justify-center">
            <Carousel />
        </div>
    );
};

const Carousel = () => {
    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex(index === pics.length - 1 ? 0 : index + 1);
    };

    const prev = () => {
        setIndex(index === 0 ? pics.length - 1 : index - 1);
    };

    return (
        <div className="bg-white inline-flex">
            <button onClick={prev}>{"<"}</button>
            <img src={pics[index]} className="max-h-[400px]" />
            <button onClick={next}>{">"}</button>
        </div>
    );
};

export default Shweyin;
