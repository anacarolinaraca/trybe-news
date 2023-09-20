import { useContext, useState } from 'react';
import { NewsContext } from '../../context/NewsContext';
import favoriteButton from '../../images/favoriteButton.svg';
import unfavoriteButton from '../../images/unfavoriteButton.svg';
import style from './ButtonFavoriteNews.module.css';
import { NewsIdProps } from '../../types/type';

function ButtonFavoriteNews({ id }: NewsIdProps) {
  const { latestNews, setLatestNews } = useContext(NewsContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const saveFavorite = () => {
    const favoriteNews = latestNews.map((news) => {
      if (id === news.id) {
        return { ...news, favoritar: !news.favoritar };
      }
      return news;
    });
    setLatestNews(favoriteNews);
    setIsFavorite(!isFavorite);
    localStorage.setItem('favoriteNews', JSON.stringify(favoriteNews));
  };

  return (
    <div>
      <button className={style.favoriteButton} onClick={saveFavorite}>
        {isFavorite ? (
          <img src={favoriteButton} alt='Botão favoritado' />
        ) : (
          <img src={unfavoriteButton} alt='Botão não favoritado' />
        )}
      </button>
    </div>
  );
}

export default ButtonFavoriteNews;
