import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs"

export default function TabsDemo() {
  return (
    <Tabs defaultValue="tab-1" className="w-[400px]">
      <TabsList>
        <TabsTab value="tab-1">Tab 1</TabsTab>
        <TabsTab value="tab-2">Tab 2</TabsTab>
        <TabsTab value="tab-3">Tab 3</TabsTab>
      </TabsList>
      <TabsPanel value="tab-1">
        <div className="border border-dashed rounded-md p-4 text-sm text-muted-foreground">
          Content for Tab 1
        </div>
      </TabsPanel>
      <TabsPanel value="tab-2">
        <div className="border border-dashed rounded-md p-4 text-sm text-muted-foreground">
          Content for Tab 2
        </div>
      </TabsPanel>
      <TabsPanel value="tab-3">
        <div className="border border-dashed rounded-md p-4 text-sm text-muted-foreground">
          Content for Tab 3
        </div>
      </TabsPanel>
    </Tabs>
  )
}
