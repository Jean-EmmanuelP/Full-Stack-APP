import { FC } from 'react'
import { TabsContent, Tabs, TabsList, TabsTrigger } from '@/ui/Tabs'
import SimpleBar from 'simplebar-react'

const DocumentationTabs: FC = () => {
    return (<Tabs defaultValue='nodejs' className='max-w-2xl w-full'>
        <TabsList>
            <TabsTrigger value='nodejs'>Node JS</TabsTrigger>
            <TabsTrigger value='python'>Python</TabsTrigger>
        </TabsList>
        <TabsContent value='nodejs'>
            {/* <SimpleBar></SimpleBar> */}
            <Code />
        </TabsContent>
        <TabsContent value='python'>
            {/* <SimpleBar></SimpleBar> */}
        </TabsContent>
    </Tabs>)
}

export default DocumentationTabs;