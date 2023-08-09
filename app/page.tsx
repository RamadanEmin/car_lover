'use client';

import { useState } from 'react';

import { CustomFilter, Hero, SearchBar } from "@/components";
import { fuels, yearsOfProduction } from '@/constants';

export default function Home() {
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');

    return (
        <main className="overflow-hidden">
             <Hero />

             <div className="mt-12 padding-x padding-y max-width" id="discover">
                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold">Car Catalog</h1>
                    <p>Explore the cars you might like</p>
                </div>

                <div className="home__filters">
                    <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

                    <div className="home__filter-container">
                        <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
                        <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear} />
                    </div>
                </div>
            </div>
        </main>
    );
}