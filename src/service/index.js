import axios from "axios";
import { baseURL } from '../../src/constants/constant';

export const getPoker = async () => {
    try {
        // const url = baseURL + "/search?limit=10";
        const url = baseURL + "/new/shuffle";
        const res = await axios({
            headers: { Accept: "application/json" },
            method: "GET",
            url,
            params: {
                limit: 10,
            },
        });

        return res;
    } catch (err) {
        console.log("err", err);
    }
};
export const getPokerWithID = async (deck_id) => {
    try {
        // const url = baseURL + "/search?limit=10";
        const url = baseURL + `/${deck_id}/draw/.`;
        const res = await axios({
            headers: { Accept: "application/json" },
            method: "GET",
            url,
        });
        return res;
    } catch (err) {
        console.log("err", err);
    }
};