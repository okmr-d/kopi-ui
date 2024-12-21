import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs"

export default function TabsDemo() {
  return (
    <Tabs defaultValue="tab-1" className="w-full">
      <TabsList className="w-full justify-start rounded-none border-b border-border bg-transparent p-0">
        <TabsTab
          value="tab-1"
          className="relative rounded-none pb-2.5 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[selected]:bg-transparent data-[selected]:shadow-none data-[selected]:after:bg-primary"
        >
          Tab 1
        </TabsTab>
        <TabsTab
          value="tab-2"
          className="relative rounded-none pb-2.5 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[selected]:bg-transparent data-[selected]:shadow-none data-[selected]:after:bg-primary"
        >
          Tab 2
        </TabsTab>
        <TabsTab
          value="tab-3"
          className="relative rounded-none pb-2.5 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[selected]:bg-transparent data-[selected]:shadow-none data-[selected]:after:bg-primary"
        >
          Tab 3
        </TabsTab>
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
