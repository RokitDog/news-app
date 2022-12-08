
type Category = | "business" | "entertainment" | "general" | "health" | "science" | "sports" | "technology";

type NewsResponse = {
    pagination: Pagination;
    data: Data[];
}

type Pagination = {
    count: Int;
    limit: Int;
    offset: Int;
    total: Int;
}

type Data = {
    author: string | null;
    category: string;
    country: string;
    description: string;
    image: string | null;
    language: string;
    published_at: string;
    source: string;
    title: string;
    url: string;
}