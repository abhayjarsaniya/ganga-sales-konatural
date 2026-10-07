import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchResults } from "@/components/search-results";

export const metadata: Metadata = {
  title: "Search",
  description: "Search Ganga Sales | Konatural premium dry fruits, spices, chocolates, coffee and celebration gift hampers.",
};

export default function Page() {
  return (
    <Suspense fallback={<div className="px-5 py-20 text-stone-500">Searching…</div>}>
      <SearchResults />
    </Suspense>
  );
}
