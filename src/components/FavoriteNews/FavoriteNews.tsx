import { useEffect, useState } from 'react';
import { NewsType } from '../../types/type';
import style from '../StyleCards/StyleList.module.css';
import CardNews from '../CardNews/CardNews';

const FavoriteNews = () => {
  const [favoriteNews, setFavoriteNews] = useState<NewsType[]>([]);

  useEffect(() => {
    const savedFavoritesLocalStorage = localStorage.getItem('favoriteNews');
    if (savedFavoritesLocalStorage !== null) {
      const test: NewsType[] = JSON.parse(savedFavoritesLocalStorage);
      const filterFavoriteNews = test.filter((news) => news.favoritar === true);
      setFavoriteNews(filterFavoriteNews);
    } else {
      setFavoriteNews([]);
    }
  }, []);

  return (
    <div className={style.containerList}>
      {favoriteNews.map((news: NewsType) => (
        <ul className={style.itemsList} key={news.id}>
          <li className={style.list}>
            <CardNews news={news} />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default FavoriteNews;
