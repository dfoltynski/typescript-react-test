import React, { useEffect, useState } from "react";
import { FaMale, FaFemale } from "react-icons/fa";
import { Next, getFromApi } from "./components";
import "./App.css";

interface RandomUser {
    gender: string;
    name: RandomUserName;
    picture: string;
}

interface RandomUserName {
    title: string;
    first: string;
    last: string;
}

const App: React.FC = () => {
    const [apiRes, setApiRes] = useState<RandomUser | null>(null);

    const fetchData = async () => {
        let randomUser: RandomUser = await getFromApi();
        console.log(randomUser);
        setApiRes(randomUser);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="App">
            <img src={apiRes?.picture} alt="profile_picture" />
            {apiRes?.gender === "male" ? (
                <FaMale className="icon" scale="2" />
            ) : (
                <FaFemale className="icon" />
            )}
            <p>
                <b>
                    {apiRes?.name.title} {apiRes?.name.first}{" "}
                    {apiRes?.name.last}
                </b>
            </p>
            <Next btnText="Next user" getNewUser={fetchData} />
        </div>
    );
};

export default App;
