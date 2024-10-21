import React from 'react'

export const DashboardDescription = () => {
    const data = {
        yearWise: [
            {
                year: 2004,
                totalCases: 1960977,
                theft: 1378977,
                dacoity: 26702,
                robbery: 92754,
                burglary: 462544,
            },
            {
                year: 2013,
                totalCases: 3099862,
                theft: 2253784,
                dacoity: 27295,
                robbery: 192303,
                burglary: 626480,
            },
        ],
        stateWise: [
            { state: 'Maharashtra', theftCases: 3036755 },
            { state: 'Karnataka', theftCases: 1049941 },
        ],
        totalCases: {
            theft: 720600,
            robbery: 64220,
            burglary: 255800,
            dacoity: 9318,
        },
    };

    return (
        <>
            <div style={{ color: 'white', backgroundColor: '#1a1a1a', padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>

                <h1 style={{ color: 'red', textAlign: 'center', marginBottom: '40px' }}>Custodial Death Statistics (2001-2010)</h1>

                <p>During the period from 2001 to 2010, a total of 2037 custodial deaths were reported across India. Here's a detailed breakdown:</p>

                <h2 style={{ color: 'red' }}>1. Area-wise Judicial Inquiries</h2>
                <p>Judicial inquiries were conducted across various states:</p>
                <ul>
                    <li>Gujarat had the highest number of inquiries with 39.</li>
                    <li>Uttar Pradesh had the least with 4 inquiries.</li>
                </ul>

                <h2 style={{ color: 'red' }}>2. Number of Police Charged vs Evicted</h2>
                <p>Police accountability varied significantly:</p>
                <ul>
                    <li>Uttar Pradesh reported 97 police officers charged and 36 convicted.</li>
                    <li>Madhya Pradesh had 26 officers charged and 4 convicted.</li>
                    <li>Chhattisgarh recorded 13 officers charged and 4 convicted.</li>
                </ul>

                <h2 style={{ color: 'red' }}>3. Case Registered vs Inquiries</h2>
                <p>Enquiries and cases registered were categorized as follows:</p>
                <ul>
                    <li>Andhra Pradesh led with 254 total enquiries, including 173 related to registered connection deaths, 70 magisterial enquiries, and 11 judicial enquiries.</li>
                    <li>West Bengal had the least with 94 total enquiries, including 10 registered connection deaths, 82 magisterial enquiries, and 2 judicial enquiries.</li>
                </ul>

                <h2 style={{ color: 'red' }}>4. Death Cause Rate</h2>
                <p>A pie chart depicted the distribution of death causes:</p>
                <ul>
                    <li>Deaths during treatment: 14.38%</li>
                    <li>Deaths while remanded: 19.15%</li>
                    <li>Deaths not remanded: 27.2%</li>
                    <li>Other causes: 30.98%</li>
                    <li>Deaths during production: 7.85%</li>
                </ul>

                <h2 style={{ color: 'red' }}>5. Death by Year</h2>
                <p>Death rates fluctuated over the years:</p>
                <ul>
                    <li>A noticeable increase after 2004, peaking in 2005 with 272 deaths.</li>
                    <li>A decline in death rates post-2005, followed by another peak in 2006 and subsequent decline after 2007.</li>
                </ul>
            </div>
            <div style={{ color: 'white', backgroundColor: '#1a1a1a', padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>

                <h1 style={{ color: 'red', textAlign: 'center', marginBottom: '40px' }}>Crime Against Women in India (2001-2014)</h1>

                <p>During the period from 2001 to 2014, a staggering 2.34 million cases of crimes against women were reported across India. Here's a comprehensive overview:</p>

                <h2 style={{ color: 'red' }}>1. States-wise Bifurcated Crime</h2>
                <p>The top 5 states with the highest number of crimes against women, categorized by specific offenses:</p>
                <ul>
                    <li><strong>Andhra Pradesh:</strong> Total 224,665 cases, including 15,114 cases of Rape, 16,531 cases of Kidnapping and Abduction, 134,091 cases of Cruelty by husband or his relatives, and 58,929 cases of Assault on Women with intent to outrage her modesty.</li>
                    <li><strong>West Bengal:</strong> Total 224,643 cases, including 22,472 cases of Rape, 25,603 cases of Kidnapping and Abduction, 148,784 cases of Cruelty by husband or his relatives, and 27,784 cases of Assault on Women with intent to outrage her modesty.</li>
                    <li><strong>Uttar Pradesh:</strong> Total 202,834 cases, including 22,108 cases of Rape, 57,327 cases of Kidnapping and Abduction, 86,398 cases of Cruelty by husband or his relatives, and 37,001 cases of Assault on Women with intent to outrage her modesty.</li>
                    <li><strong>Rajasthan:</strong> Total 198,678 cases, including 19,083 cases of Rape, 28,718 cases of Kidnapping and Abduction, 115,195 cases of Cruelty by husband or his relatives, and 35,682 cases of Assault on Women with intent to outrage her modesty.</li>
                    <li><strong>Madhya Pradesh:</strong> Total 185,625 cases, including 40,422 cases of Rape, 12,116 cases of Kidnapping and Abduction, 44,957 cases of Cruelty by husband or his relatives, and 88,130 cases of Assault on Women with intent to outrage her modesty.</li>
                </ul>

                <h2 style={{ color: 'red' }}>2. Top 5 States Having Most Crime</h2>
                <p>The states with the highest total number of crimes against women:</p>
                <ul>
                    <li>Andhra Pradesh: 224,665 cases</li>
                    <li>West Bengal: 224,643 cases</li>
                    <li>Uttar Pradesh: 202,834 cases</li>
                    <li>Rajasthan: 198,678 cases</li>
                    <li>Madhya Pradesh: 185,625 cases</li>
                </ul>

                <h2 style={{ color: 'red' }}>3. Year-wise Total Crime</h2>
                <p>A line chart depicting the total number of crimes against women each year, showing a notable increase over time with spikes observed after 2012.</p>

                <h2 style={{ color: 'red' }}>4. Year-wise Bifurcated Crime</h2>
                <p>A line chart detailing crimes against women categorized by Rape, Kidnapping and Abduction, Cruelty by husband or his relatives, Assault on Women with intent to outrage her modesty, Dowry deaths, and Importation of girls. Trends show:</p>
                <ul>
                    <li>A significant number of cases related to Cruelty by husband or relatives each year, with a notable increase post-2006.</li>
                    <li>An increase in Assault on Women with intent to outrage her modesty cases after 2012.</li>
                </ul>

                <h2 style={{ color: 'red' }}>5. Crime Rate</h2>
                <p>A pie chart illustrating the distribution of types of crimes against women:</p>
                <ul>
                    <li>42.42% cases of Cruelty by husband or his relatives</li>
                    <li>22.36% cases of Assault on women with intent to outrage her modesty</li>
                    <li>11.64% cases of Rape</li>
                    <li>13.48% cases of Kidnapping and Abduction</li>
                    <li>5.83% cases of Insult to modesty of Women</li>
                    <li>4.24% cases of Dowry Deaths</li>
                </ul>
            </div>
            <div style={{ color: 'white', backgroundColor: '#1a1a1a', padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>

                <h1 style={{ color: 'red', textAlign: 'center', marginBottom: '40px' }}>Details of Persons Arrested</h1>

                <h2 style={{ color: 'red' }}>1. Gender Distribution by Top 7 Crime Categories</h2>
                <p>
                    This section presents the distribution of arrests based on the top 7 crime categories:
                    Prohibition Act, Hurt (Section 323,324 to 338 IPC), Grievous hurt, Riots (Section 143,144,145,147 to 151,153,153A,153B,157,158,160 IPC), Riots, Excise Act, and Gambling Act.
                </p>
                <ul>
                    <li>Most cases (2,635,830) are registered under the Prohibition Act, with 2,083,071 males and 552,759 females.</li>
                    <li>Least cases (1,062,786) are registered under the Excise Act, with 1,022,934 males and 39,852 females.</li>
                </ul>

                <h2 style={{ color: 'red' }}>2. State-wise Arrests by Criminal Code</h2>
                <p>
                    This section provides the total number of arrests categorized by the criminal code across different states.
                </p>
                <ul>
                    <li>Total arrests under criminal codes amount to 14,200,108.</li>
                    <li>Uttar Pradesh has the highest number of arrests under IPC (7,407,509).</li>
                    <li>Andhra Pradesh has the lowest number of arrests under IPC (1,110,499).</li>
                </ul>

                <h2 style={{ color: 'red' }}>3. Age Group-wise Arrest Rate</h2>
                <p>
                    This section illustrates the distribution of arrests based on age groups.
                </p>
                <ul>
                    <li>46.64% of arrests are individuals aged 18-30 years.</li>
                    <li>36.18% of arrests are individuals aged 30-45 years.</li>
                    <li>15% of arrests are individuals aged 45-60 years.</li>
                    <li>1.85% of arrests are individuals above 60 years.</li>
                    <li>0.6% of arrests are individuals below 18 years.</li>
                </ul>

                <h2 style={{ color: 'red' }}>4. Gender Distribution</h2>
                <p>
                    This section shows the count of arrests based on gender and age group.
                </p>
                <ul>
                    <li>Most female arrests (1,918,242) fall within the 30-45 age group.</li>
                    <li>Least female arrests (25,380) are below 18 years old.</li>
                </ul>
            </div>
            <div style={{ color: 'white', backgroundColor: '#1a1a1a', padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
                <h1 style={{ color: 'red', textAlign: 'center', marginBottom: '40px' }}>Property Theft in India</h1>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: 'red', marginBottom: '20px' }}>Year Wise Total Crime</h2>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>There is a hike in total theft after 2004 and a decrease in total theft after 2005.</li>
                        <li>There is again a hike in total theft cases after 2009.</li>
                    </ul>
                    <h3 style={{ color: 'red', marginTop: '20px' }}>Data per Year:</h3>
                    {data.yearWise.map((record, index) => (
                        <div key={index} style={{ marginBottom: '10px' }}>
                            <p>
                                <strong>Year: </strong>{record.year}, <strong>Total Cases: </strong>{record.totalCases}, <strong>Theft: </strong>{record.theft}, <strong>Dacoity: </strong>{record.dacoity}, <strong>Robbery: </strong>{record.robbery}, <strong>Burglary: </strong>{record.burglary}
                            </p>
                        </div>
                    ))}
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: 'red', marginBottom: '20px' }}>Sum of Theft, Dacoity, Robbery, and Burglary</h2>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>2013 had the most theft cases, with a total of 3,099,862 cases (2,253,784 theft cases, 27,295 dacoity, 192,303 robbery, and 626,480 burglary).</li>
                        <li>2004 had the least number of theft cases, with a total of 1,960,977 cases (1,378,977 theft cases, 26,702 dacoity, 92,754 robbery, and 462,544 burglary).</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: 'red', marginBottom: '20px' }}>State/UT Wise Total Crime</h2>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Maharashtra had the most number of theft cases, with 3,036,755 cases.</li>
                        <li>Karnataka had the least number of theft cases, with 1,049,941 cases.</li>
                    </ul>
                </section>

                <section>
                    <h2 style={{ color: 'red', marginBottom: '20px' }}>Total Cases from 2001 to 2013</h2>
                    <p>
                        Total Theft: {data.totalCases.theft.toLocaleString()} cases, Robbery: {data.totalCases.robbery.toLocaleString()} cases, Burglary: {data.totalCases.burglary.toLocaleString()} cases, Dacoity: {data.totalCases.dacoity.toLocaleString()} cases
                    </p>
                </section>
            </div>
        </>
    )
}
