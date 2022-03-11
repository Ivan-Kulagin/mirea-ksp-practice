import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Quote from "../components/Quote/Quote";
import Temperature from "../components/Temperature/Temperature";

const AppRoutes = () => (
    <Routes>
        <Route path="quote1" element={<Quote page_number={1} quote={'Sample quote'} author={'Ivan'} />} />
        <Route path="quote2" element={<Quote page_number={2} quote={'Another quote'} author={'Kulagin'} />} />
        <Route path="temperature" element={<Temperature temperature={-2} />} />
    </Routes>
);

export default AppRoutes;