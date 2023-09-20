import CardNews from '../CardNews/CardNews';
import { NewsContext } from '../../context/NewsContext';
import { useContext, useState } from 'react';
import style from '../StyleCards/StyleList.module.css';

const TypeNews = () => {
  const { latestNews } = useContext(NewsContext);
  const [showMoreNews, setShowMoreNews] = useState(false);
  const filterNews = latestNews.filter((news) => news.tipo === 'Notícia');
  const visibleNewsCount = showMoreNews ? filterNews.length : 12;
  return (
    <>
      <div className={style.containerList}>
        {filterNews.slice(0, visibleNewsCount).map((newsRecent) => (
          <ul className={style.itemsList} key={newsRecent.id}>
            <li className={style.list}>
              {newsRecent.tipo === 'Notícia' && <CardNews news={newsRecent} />}
            </li>
          </ul>
        ))}
      </div>
      <div className={style.moreNewsButtonContainer}>
        {filterNews.length > 13 && (
          <button
            className={style.moreNewsButton}
            onClick={() => setShowMoreNews(!showMoreNews)}
          >
            {showMoreNews ? 'Menos notícias' : 'Mais notícias'}
          </button>
        )}
      </div>
    </>
  );
};

export default TypeNews;
