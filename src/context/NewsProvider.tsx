import { useState } from "react";
import { NewsType, UseContextChildren } from "../types/type";
import { NewsContext } from "./NewsContext";

export function NewsProvider({ children }: UseContextChildren) {
  const [latestNews, setLatestNews] = useState<NewsType[]>([]);

  return (
    <NewsContext.Provider value={ {latestNews, setLatestNews} }>
      {children}
    </NewsContext.Provider>
  )
}