import React, { Context } from "react";
import axios from "axios";

interface RandomUser {
    gender: string;
    name: object;
    picture: string;
}

const getFromApi: any = async () => {
    const res: any = await axios.get("https://randomuser.me/api/");

    const randomUserData: RandomUser = {
        gender: res.data.results[0].gender,
        name: res.data.results[0].name,
        picture: res.data.results[0].picture.large,
    };
    // res.data.results[0].gender
    // res.data.results[0].name
    // res.data.results[0].picture
    console.log(randomUserData);
    return randomUserData;
};

export { getFromApi };
