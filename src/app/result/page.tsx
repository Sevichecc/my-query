"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

type SearchRecord = {
  query: string;
  date: string;
  source: string;
};

export default function ResultPage() {
  const [searchRecords] = useState<SearchRecord[]>([
    { query: "React hooks", date: "2024-01-15", source: "All" },
    { query: "NextJS 13 features", date: "2024-01-14", source: "Miniflux" },
    { query: "Tailwind CSS tips", date: "2024-01-13", source: "Mastodon" },
    { query: "TypeScript best practices", date: "2024-01-12", source: "All" },
    { query: "GraphQL queries", date: "2024-01-11", source: "Miniflux" },
  ]);

  const renderSearchRecords = (source: string) => {
    const filteredRecords = source === "All"
      ? searchRecords
      : searchRecords.filter(record => record.source === source);

    return (
      <ScrollArea className="h-[80vh]">
        {filteredRecords.map((record, index) => (
          <div key={index} className="mb-4 border rounded-lg">
            <h3 className="font-semibold px-4 pt-4">{record.query}</h3>
            <p className="text-sm text-gray-500 px-4 pb-4">{record.date}</p>
          </div>
        ))}
      </ScrollArea>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="miniflux">Miniflux</TabsTrigger>
          <TabsTrigger value="mastodon">Mastodon</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <CardContent className="p-0">
            {renderSearchRecords("All")}
          </CardContent>
        </TabsContent>
        <TabsContent value="miniflux">
          <CardContent className="p-0">
            {renderSearchRecords("Miniflux")}
          </CardContent>
        </TabsContent>
        <TabsContent value="mastodon">
          <CardContent className="p-0">
            {renderSearchRecords("Mastodon")}
          </CardContent>
        </TabsContent>
      </Tabs>
    </div>
  );
}
