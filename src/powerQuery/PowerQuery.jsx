import React from 'react'

export const PowerQuery = () => {
    return (
        // <div>
        <div style={{
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            color: 'white'
        }}>
            <h1 style={{ color: 'red' }}>Data Transformation Using Power Query</h1>

            <h2 style={{ color: 'red' }}>Custodial Death in India</h2>
            <img
                src="img/custodial_death.jpg"
                alt=""
                style={{ width: '100%', height: '600px', padding: '20px' }}
            />
            <p style={{ color: 'white' }}>
                Dataset that were combined:
                <ul>
                    <li>40_01_Custodial_death_person_remanded</li>
                    <li>40_02_Custodial_death_person_not_remanded</li>
                    <li>40_03_Custodial_death_during_production</li>
                    <li>40_04_Custodial_death_during_hospitalization_or_treatment</li>
                    <li>40_05_Custodial_death_others</li>
                </ul>
                <br />
                Actions taken:
                <ul>
                    <li>Merged based on state with type of death column added</li>
                    <li>Replaced null values with 0</li>
                    <li>Removed rows with total gender values</li>
                    <li>Converted all numerical values from text to numerical data types</li>
                </ul>
            </p>

            <h2 style={{ color: 'red' }}>Murder in India</h2>
            <img
                src="img/32.jpg"
                alt=""
                style={{ width: '100%', height: '600px', padding: '20px' }}
            />
            <p style={{ color: 'white' }}>
                Dataset used:
                <ul>
                    <li>32_Murder_victim_age_sex</li>
                </ul>
                <br />
                Actions taken:
                <ul>
                    <li>Replaced null values with 0</li>
                    <li>Removed rows with total gender values</li>
                    <li>Converted all numerical values from text to numerical data types</li>
                </ul>
            </p>

            <h2 style={{ color: 'red' }}>Persons Arrested in India</h2>
            <img
                src="img/person_arrested_in_india.jpg"
                alt=""
                style={{ width: '100%', height: '600px', padding: '20px' }}
            />
            <p style={{ color: 'white' }}>
                Datasets combined:
                <ul>
                    <li>07_01_Persons_arrested_by_sex_and_age_group_IPC_2012</li>
                    <li>07_01_Persons_arrested_by_sex_and_age_group_IPC_2013</li>
                    <li>07_02_Persons_arrested_by_sex_and_age_group_SLL_2012</li>
                    <li>07_02_Persons_arrested_by_sex_and_age_group_SLL_2013</li>
                </ul>
                <br />
                Actions taken:
                <ul>
                    <li>Removed unnecessary columns before merging</li>
                    <li>Merged based on states</li>
                    <li>Replaced null values with 0</li>
                    <li>Removed rows with total gender values</li>
                    <li>Converted all numerical values from text to numerical data types</li>
                </ul>
            </p>

            <h2 style={{ color: 'red' }}>Number of Crimes in India</h2>
            <img
                src="img/total_crime_in_india.jpg"
                alt=""
                style={{ width: '100%', height: '600px', padding: '20px' }}
            />
            <p style={{ color: 'white' }}>
                Datasets combined:
                <ul>
                    <li>01_District_wise_crimes_committed_IPC_2001_2012</li>
                    <li>01_District_wise_crimes_committed_IPC_2013</li>
                </ul>
                <br />
                Actions taken:
                <ul>
                    <li>Removed unnecessary columns before merging</li>
                    <li>Merged based on states</li>
                    <li>Replaced null values with 0</li>
                    <li>Removed rows with total gender values</li>
                    <li>Converted all numerical values from text to numerical data types</li>
                </ul>
            </p>

            <h2 style={{ color: 'red' }}>Property Theft in India</h2>
            <img
                src="img/property_theft.jpg"
                alt=""
                style={{ width: '100%', height: '600px', padding: '20px' }}
            />
            <p style={{ color: 'white' }}>
                Datasets combined:
                <ul>
                    <li>17_Case_reported_and_value_of_property_taken_away_by_place_of_occurrence_2001_2012</li>
                    <li>17_Case_reported_and_value_of_property_taken_away_by_place_of_occurrence_2013</li>
                    <li>17_Crime_by_place_of_occurrence_2001_2012</li>
                    <li>17_Crime_by_place_of_occurrence_2013</li>
                </ul>
                <br />
                Actions taken:
                <ul>
                    <li>Removed unnecessary columns before merging</li>
                    <li>Merged based on states</li>
                    <li>Replaced null values with 0</li>
                    <li>Removed rows with total gender values</li>
                    <li>Converted all numerical values from text to numerical data types</li>
                </ul>
            </p>

            <h2 style={{ color: 'red' }}>Crime Against Women in India</h2>
            <img
                src="img/women's_crimes.jpg"
                alt=""
                style={{ width: '100%', height: '600px', padding: '20px' }}
            />
            <p style={{ color: 'white' }}>
                Datasets combined:
                <ul>
                    <li>42_District_wise_crimes_committed_against_women_2001_2012</li>
                    <li>42_District_wise_crimes_committed_against_women_2013</li>
                </ul>
                <br />
                Actions taken:
                <ul>
                    <li>Removed unnecessary columns before merging</li>
                    <li>Merged based on states</li>
                    <li>Replaced null values with 0</li>
                    <li>Removed rows with total gender values</li>
                    <li>Converted all numerical values from text to numerical data types</li>
                </ul>
            </p>
        </div>
    )
}
