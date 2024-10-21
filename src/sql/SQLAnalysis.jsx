import React from 'react'

export const SQLAnalysis = () => {
    return (
        <div style={{
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            color: 'white'
        }}>
            <h1 style={{ color: 'red' }}>Safety Index Based on Census 2001 Data</h1>
            <p>
                Data from the 2001 census was collected using the power query feature for web scraping from the specified website. This comprehensive dataset included demographic information crucial for understanding various socio-economic factors across states in India.
            </p>
            <p>
                To enhance the analysis, the census data was integrated with a dataset on murders in India using SQL techniques. This integration ensured that pertinent information from both datasets was combined, focusing on key metrics relevant to public safety and crime rates.
            </p>
            <p>
                During the integration process, meticulous care was taken to retain only the essential columns necessary for calculating the Safety Index. Extraneous data points were systematically removed to streamline the dataset for analysis.
            </p>
            <h2>Process of Finding the Safety Index:</h2>
            <ul>
                <li>After merging the datasets, the combined data was grouped by state to facilitate state-level analysis.</li>
                <li>A Crime Rate Index was computed using a specific formula designed to quantify the prevalence of crime within each state.</li>
                <li>Once the Crime Rate Index was calculated, states were ranked based on their crime rates, with lower numerical ranks indicating higher crime rates.</li>
            </ul>
            <img
                src="img/crime_rate_formula.jpg"
                alt=""
                style={{ width: '100%', height: '300px', padding: '20px' }}
            />

            <h2>Top 10 Safest Cities to Live in According to Census 2001:</h2>

            <ol>
                <li>Dadra & Nagar Haveli</li>
                <li>Kerala</li>
                <li>Chandigarh</li>
                <li>Himachal Pradesh</li>
                <li>West Bengal</li>
                <li>Rajasthan</li>
                <li>Gujarat</li>
                <li>Tamil Nadu</li>
                <li>Goa</li>
                <li>Maharashtra</li>
            </ol>
            <img
                src="img/safest_states.jpg"
                alt=""
                style={{ width: '100%', height: '600px', padding: '20px' }}
            />
            <h2>Top 10 Most Dangerous Cities to Live in According to Census 2001:</h2>
            <ol>
                <li>Jammu & Kashmir</li>
                <li>Manipur</li>
                <li>Arunachal Pradesh</li>
                <li>Tripura</li>
                <li>Meghalaya</li>
                <li>Jharkhand</li>
                <li>Nagaland</li>
                <li>Assam</li>
                <li>Uttar Pradesh</li>
                <li>Bihar</li>
            </ol>
            <img
                src="img/danger_states.jpg"
                alt=""
                style={{ width: '100%', height: '600px', padding: '20px' }}
            />
        </div>
    );
}

