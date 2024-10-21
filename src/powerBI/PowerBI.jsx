import React from 'react'
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import { DashboardDescription } from '../dashboard/DashboardDescription';

export const PowerBI = () => {
    return (
        <div>
            <PowerBIEmbed
                embedConfig={{
                    type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                    // id: "3dec752b-96e7-47ec-8595-48c8824b7522",
                    id: "c59a11c3-c2c4-42e7-8b4b-27642199046a",
                    // embedUrl: "https://app.powerbi.com/reportEmbed?reportId=3dec752b-96e7-47ec-8595-48c8824b7522&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",


                    embedUrl: "https://app.powerbi.com/reportEmbed?reportId=c59a11c3-c2c4-42e7-8b4b-27642199046a&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
                    accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyIsImtpZCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNjJkMzlkYmQtMTY3NC00MTNiLWJiM2YtNGFjYzc3ZTk0N2EyLyIsImlhdCI6MTcyMTY2MDU3MCwibmJmIjoxNzIxNjYwNTcwLCJleHAiOjE3MjE2NjQ4MjcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84WEFBQUFQbWVhK2hEWFdXd3Y1bldQYmRxVy8yRUN5VHB4MVdyUnVBakREZVV3VUFVWnFRQXpMR0VONU5KNGs4QnpRS3dJIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiUmFzdG9naSIsImdpdmVuX25hbWUiOiJSYWp1IiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMjQwOTo0MGMxOjNmOmM1YzE6OTQ1MzoxNDAyOjdjNzQ6OWUwNSIsIm5hbWUiOiJSYWp1IFJhc3RvZ2kiLCJvaWQiOiIwMGY3MzUxZS1lZTFiLTRhYmItYTJhOC05YjhkOWEyODAyNGQiLCJwdWlkIjoiMTAwMzIwMDNBMjQwMjkxQyIsInJoIjoiMC5BY1lBdlozVFluUVdPMEc3UDByTWQtbEhvZ2tBQUFBQUFBQUF3QUFBQUFBQUFBREdBSkEuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiUFIwUmpCOEp2NlJxNXdWVWdDZERndmV1ay1BdUFaSW5ocWp1S2g3eW1DNCIsInRpZCI6IjYyZDM5ZGJkLTE2NzQtNDEzYi1iYjNmLTRhY2M3N2U5NDdhMiIsInVuaXF1ZV9uYW1lIjoiaW5mb0Bjc2UtYWltbC5saXZlIiwidXBuIjoiaW5mb0Bjc2UtYWltbC5saXZlIiwidXRpIjoiYW9oSWVhMU9KRWEycm5lWWhsZHVBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19pZHJlbCI6IjEgMTgiLCJ4bXNfcGwiOiJlbi1VUyJ9.tYdTuLHESa0s3kFCapIrer_VH2zDMGVU3cC21tnWTMvhR4NAAhB5C90wAo-flPyUYIZx1s0Po-_aDLv4eYKxvwM9Fijc2sHYOVlNtaJKU68_KfNxtX5dD8Kp5TphCnuBqOfa7PqLy4uOU5zv1cXmbyxeiC-ZM4eBQfFaDwu_I-G0RKpVWxcjB0txmRAcgxDH3aZfkacmjCnRwhEHC6bLAo78gHnLvvzcRt1HgWIavgsbdyraWvGgzA6fpUYjPWsagtncRVn8WSSYwz7HpaParvvFHfl4f9dNw3A1_eJNHEnCY9Fgzlk0YcKi_-Dfmdw7jBSwAnHQrRwqf-1y5EAsqA",
                    tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
                    settings: {
                        panes: {
                            filters: {
                                expanded: false,
                                visible: false
                            }
                        },
                        background: models.BackgroundType.Transparent,
                    }
                }}

                eventHandlers={
                    new Map([
                        ['loaded', function () { console.log('Report loaded'); }],
                        ['rendered', function () { console.log('Report rendered'); }],
                        ['error', function (event) { console.log(event.detail); }],
                        ['visualClicked', () => console.log('visual clicked')],
                        ['pageChanged', (event) => console.log(event)],
                    ])
                }

                cssClassName={"Embed-data"}

                getEmbeddedComponent={(embeddedReport) => {
                    window.Report = embeddedReport;
                }}
            />
            <DashboardDescription />

        </div>
    )
}
