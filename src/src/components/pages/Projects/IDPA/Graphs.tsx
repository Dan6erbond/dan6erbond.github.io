import * as React from "react";
import {ResponsiveBar} from '@nivo/bar';

const data = [
    {
        "Aspect": "Functionalities",
        "Active in IT": 14 + 1,
        "Not Given": 0,
        "Junior / Highschool": 2 + 9 + 1 + 1,
        "Working": 8 + 1 + 1 + 1 + 15 + 1 + 2,
        "College / University": 23 + 1 + 1,
    },
    {
        "Aspect": "Availability on Different Devices",
        "Active in IT": 10,
        "Not Given": 1 + 1,
        "Junior / Highschool": 1 + 8 + 1,
        "Working": 5 + 1 + 2 + 1 + 5 + 2,
        "College / University": 16 + 1,
    },
    {
        "Aspect": "Offline Availability",
        "Active in IT": 8,
        "Not Given": 1,
        "Junior / Highschool": 11 + 1,
        "Working": 2 + 5 + 8 + 2,
        "College / University": 14 + 1,
    },
    {
        "Aspect": "Price",
        "Active in IT": 5 + 1,
        "Not Given": 0,
        "Working": 2 + 5 + 1 + 6 + 1,
        "Junior / Highschool": 1 + 3 + 1,
        "College / University": 15,
    },
    {
        "Aspect": "Cloud Storage",
        "Active in IT": 4,
        "Not Given": 0,
        "Working": 1 + 1 + 1 + 1,
        "Junior / Highschool": 1 + 7,
        "College / University": 9,
    },
    {
        "Aspect": "Privacy",
        "Active in IT": 0,
        "Not Given": 0,
        "Working": 1,
        "Junior / Highschool": 0,
        "College / University": 2 + 1,
    },
    {
        "Aspect": "Link to Third Party Services",
        "Active in IT": 7,
        "Not Given": 1 + 1,
        "Working": 1 + 2 + 1 + 2 + 5 + 3,
        "Junior / Highschool": 1 + 4 + 1,
        "College / University": 13 + 1 + 1,
    },
    {
        "Aspect": "Open Source",
        "Active in IT": 3,
        "Not Given": 1,
        "Working": 1 + 2 + 8 + 1 + 2,
        "Junior / Highschool": 3 + 1,
        "College / University": 13 + 1,
    },
    {
        "Aspect": "Online availability",
        "Active in IT": 3,
        "Not Given": 1,
        "Working": 1 + 2 + 1 + 2 + 2,
        "Junior / Highschool": 1,
        "College / University": 1 + 8 + 1 + 1,
    },
    {
        "Aspect": "Stability",
        "Active in IT": 1,
        "Not Given": 0,
        "Working": 0,
        "Junior / Highschool": 0,
        "College / University": 0,
    }
];

export function SoftwareAspectsGraph() {
    return (
        <ResponsiveBar
            data={data}
            keys={['Active in IT', 'Junior / Highschool', 'Working', 'College / University', 'Not Given']}
            indexBy="Aspect"
            margin={{top: 50, right: 130, bottom: 50, left: 60}}
            padding={0.3}
            colors={{scheme: 'set2'}}
            borderColor={{from: 'color', modifiers: [['darker', 1.6]]}}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Aspect',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Responses',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{from: 'color', modifiers: [['darker', 1.6]]}}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
    );
}