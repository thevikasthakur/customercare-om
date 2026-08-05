import { blogs1 } from "./blogs1";
import { blogs2 } from "./blogs2";
import type { BlogPost } from "./types";

export const blogs: BlogPost[] = [...blogs1, ...blogs2].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
