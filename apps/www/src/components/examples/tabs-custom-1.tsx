import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs"

export default function TabDemo() {
  return (
    <Tabs defaultValue="tab-1" className="w-full">
      <TabsList className="bg-transparent p-0">
        <TabsTab
          value="tab-1"
          className="data-[selected]:bg-muted data-[selected]:shadow-none"
        >
          Tab 1
        </TabsTab>
        <TabsTab
          value="tab-2"
          className="data-[selected]:bg-muted data-[selected]:shadow-none"
        >
          Tab 2
        </TabsTab>
        <TabsTab
          value="tab-3"
          className="data-[selected]:bg-muted data-[selected]:shadow-none"
        >
          Tab 3
        </TabsTab>
      </TabsList>
      <TabsPanel value="tab-1">
        <div className="rounded-md border border-dashed p-4 text-sm text-muted-foreground">
          Content for Tab 1
        </div>
      </TabsPanel>
      <TabsPanel value="tab-2">
        <div className="rounded-md border border-dashed p-4 text-sm text-muted-foreground">
          Content for Tab 2
        </div>
      </TabsPanel>
      <TabsPanel value="tab-3">
        <div className="rounded-md border border-dashed p-4 text-sm text-muted-foreground">
          Content for Tab 3
        </div>
      </TabsPanel>
    </Tabs>
  )
}
