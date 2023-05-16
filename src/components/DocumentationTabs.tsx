import { FC } from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/ui/Tabs'

const DocumentationTabs: FC = () => {
    return (<Tabs default>
        <TabsList>
            <TabsTrigger>Node JS</TabsTrigger>
            <TabsTrigger>Python</TabsTrigger>
        </TabsList>
    </Tabs>)
}

export default DocumentationTabs;