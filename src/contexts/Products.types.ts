export type Data = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

export type filteredData = {
  data: {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
  };
};

export type ProductsContextType = {
  loading: boolean;
  currentProducts: Data[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  setSearchTerm: (id: string) => void;
  searchTerm: string;
  error: string;
  totalPage: number;
  filter: number | string;
  filteredProduct: Data | undefined;
  totalProducts: number | undefined;
};
export type ProjectsQueryType = {
  page: number;
  per_page: number;
  total_pages: number;
  total?: number;
  data: Data[];
};
