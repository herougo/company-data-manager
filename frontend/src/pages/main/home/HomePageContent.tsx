import './HomePageContent.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import InputTabContent from './tabs/InputTabContent';
import RawJSONTabContent from './tabs/RawJSONTabContent';


const HomePageContent = () => {
    const onTabValueChange = (value: string): void => {
        console.log(value);
    }

    return (
        <div className='home-content'>
            <Tabs defaultValue="raw-json" onValueChange={onTabValueChange}>
                <TabsList>
                    <TabsTrigger value="raw-json">Raw JSON</TabsTrigger>
                    <TabsTrigger value="input">Input</TabsTrigger>
                </TabsList>
                <TabsContent value="raw-json">
                    <RawJSONTabContent />
                </TabsContent>
                <TabsContent value="input">
                    <InputTabContent />
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default HomePageContent;
