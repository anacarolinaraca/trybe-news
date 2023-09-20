export type NewsType = {
  id: number,
  tipo: string,
  titulo: string,
  introducao: string,
  data_publicacao: string,
  produto_id: number,
  produtos: string,
  editorias: string,
  imagens: string,
  produtos_relacionados: string,
  destaque: boolean,
  link: string,
  favoritar: boolean,
}

export type NewsIdProps = {
  id: number;
}

export type NewsItemProps = {
  news: NewsType;
}

export type UseContextChildren = {
  children: React.ReactNode,
};

export type UseContextProvider = {
  latestNews: NewsType[],
  setLatestNews: React.Dispatch<React.SetStateAction<NewsType[]>>,
};