import { NewsType } from "../types/type";

export const IBGE_API = async () => {
  const fetchAPI = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';
  const response = await fetch(fetchAPI);
  const data = await response.json();
  console.log(data.items)
  return data.items as NewsType[];
}