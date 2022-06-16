import React from "react";
import { Route, Routes } from "react-router-dom";
import Newsfeed from "../pages/NewsFeed/Newsfeed";
const AppRouting = () => {
    return (
        <Routes>
            <Route path="/" caseSensitive={false} element={<Newsfeed />} />
        </Routes>
    );
};
export default AppRouting;