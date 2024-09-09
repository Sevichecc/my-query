"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [searchHistory, setSearchHistory] = useState([
    { query: "React hooks tutorial", date: "2023-12-01 14:30" },
    { query: "NextJS 13 features", date: "2023-11-30 09:15" },
    { query: "Tailwind CSS best practices", date: "2023-11-29 16:45" },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const clearSearchHistory = () => {
    setSearchHistory([]);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push("/result");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8">My Query</h1>
        <Command className="rounded-lg border shadow-md">
          <CommandInput
            placeholder="Search from sources you trust"
            className="w-full px-3 py-2"
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Search History">
              {searchHistory.map((item, index) => (
                <CommandItem key={index}>
                  <span className="flex-1">{item.query}</span>
                  <span className="text-sm text-gray-400">{item.date}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
        <div className="mt-4 flex justify-between">
          <Button onClick={handleSearch}>Search</Button>
          {searchHistory.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearchHistory}
              className="text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear History
            </Button>
          )}
        </div>
      </main>
    </div>
  );
}
