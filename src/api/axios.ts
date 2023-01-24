import axios from "axios";
import { Data, filteredData } from "../contexts/Products.types";
import { ProjectsQueryType } from "../contexts/Products.types";
export async function getProducts(
  page: number,
  setLoading: (loading: boolean) => void,
  setError: (error: string) => void,
  setCurrentProducts: (currentProducts: Data[]) => void,
  setTotalPages: (totalPages: number) => void,
  setTotalProducts: (totalProducts: number | undefined) => void
) {
  try {
    setLoading(true);
    const { data } = await axios.get<ProjectsQueryType>(
      `https://reqres.in/api/products`,
      {
        params: {
          per_page: 5,
          page: page
        }
      }
    );
    setLoading(false);
    setTotalPages(data.total_pages);
    setTotalProducts(data.total);
    setCurrentProducts(data.data);

    return data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      setError(`${error.message}`);
      console.log("error message: ", error.message);
      return error.message;
    } else {
      setError("An unexpected error occurred");
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

export async function getFilteredProduct(
  setLoading: (loading: boolean) => void,
  setError: (error: string) => void,
  setFilteredProduct: (filteredProduct: Data) => void,
  filter: number | string
) {
  try {
    setLoading(true);
    const { data } = await axios.get<filteredData>(
      `https://reqres.in/api/products`,
      {
        params: {
          id: filter
        }
      }
    );
    setLoading(false);
    console.log(data.data);
    setFilteredProduct(data.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      setError(`${error.message}`);
      console.log("error message: ", error.message);
      return error.message;
    } else {
      setError("An unexpected error occurred");
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
