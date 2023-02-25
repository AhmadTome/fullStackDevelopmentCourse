import React from 'react';
import {Routes, Route} from 'react-router-dom';
import PersonalInformation from "../User/personalInformation";


const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/user" element={<PersonalInformation />} />
                <Route path="/post" element="post" />
                <Route path="/setting" element="setting" />
                <Route path="*" element="not found" />
            </Routes>
        </div>
    );
};

export default Router;