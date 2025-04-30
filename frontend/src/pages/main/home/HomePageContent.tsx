import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import InputTabContent from './tabs/InputTabContent';
import RawJSONTabContent from './tabs/RawJSONTabContent';
import { useState } from 'react';


enum JsonTabValue {
    RawJson = "raw-json",
    Input = "input"
};

const tabBackgroundColour = (selectedTab: string, relevantTab: string): string => {
    if (selectedTab === relevantTab) {
        return 'bg-white';
    } else {
        return 'bg-gray-400';
    }
}


const HomePageContent = () => {
    const [tab, setTab] = useState<string>(JsonTabValue.RawJson);

    const onTabValueChange = (value: string): void => {
        setTab(value);
    };

    const rawJsonTabsTriggerClasses = tabBackgroundColour(tab, JsonTabValue.RawJson);
    const inputTabsTriggerClasses = tabBackgroundColour(tab, JsonTabValue.Input);

    return (
        <div className='home-content h-full flex items-center justify-center'>
            <Tabs 
                value={tab}
                onValueChange={onTabValueChange}
                className='bg-gray-600 w-[min(80%,800px)]  h-9/10 flex items-center p-[5px] rounded-[5px]'
            >
                <TabsList className='bg-gray-400'>
                    <TabsTrigger
                        value={JsonTabValue.RawJson}
                        className={rawJsonTabsTriggerClasses}
                    >
                        Raw JSON
                    </TabsTrigger>
                    <TabsTrigger
                        value={JsonTabValue.Input}
                        className={inputTabsTriggerClasses}
                    >
                        Input
                    </TabsTrigger>
                </TabsList>
                <div className='w-full p-[10px] bg-gray-700 h-full rounded-[5px]'>
                    <TabsContent
                        value={JsonTabValue.RawJson}
                        className='h-full'
                    >
                        <RawJSONTabContent />
                    </TabsContent>
                    <TabsContent
                        value={JsonTabValue.Input}
                        className='h-full'
                    >
                        <InputTabContent />
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );
}

export default HomePageContent;
