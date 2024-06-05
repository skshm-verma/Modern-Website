import React from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

import { tabsData } from '../DataForPage/DummyData'
const TabsComponent = () => {
    return (
        <div id="features">
            <Tabs
                id="custom-animation"
                value="bedroom"
                className="grid grid-cols-2 justify-items-center items-center content-between w-full">
                <div className='w-4/5 pl-24'>
                    <h1 className="text-5xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark">
                        Features
                    </h1>
                    <p className="text-2xl  pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark">
                        AxeL offers many great features. You can create your own room,
                        request a service, buy modern lookiing furniture, sell a furniture
                        and so much more. Take a snek peek at each of them.
                    </p>

                    <TabsHeader className='flex justify-center items-center content-center bg-gray-100'>
                        {tabsData.map(({ label, value }) => (
                            <Tab key={value} value={value}>
                                <p className="text-royalBlue font-inter leading-normal no-underline align-middle tracking-wide normal-case">
                                    {label}
                                </p>
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody
                        animate={{
                            mount: { y: 0 },
                            unmount: { y: 250 },
                        }}>
                        {tabsData.map(({ value, desc, linkText }) => (
                            <TabPanel key={value} value={value}>
                                <p className="text-lg relative right-3 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark">
                                    {desc}
                                </p>
                                <span className="text-royalBlue font-inter leading-normal no-underline align-middle tracking-wide normal-case relative cursor-pointer right-3 hover:animate-puls">
                                    {linkText}
                                </span>
                            </TabPanel>
                        ))}
                    </TabsBody>
                </div>
                <div>
                    <TabsBody
                        animate={{
                            mount: { y: 0 },
                            unmount: { y: 250 },
                        }}
                    >
                        {tabsData.map(({ value, img }) => (
                            <TabPanel key={value} value={value}>
                                <img className="h-[650px]" src={img} alt="phone"></img>
                            </TabPanel>
                        ))}
                    </TabsBody>
                </div>
            </Tabs>
        </div>
    )
}

export default TabsComponent
