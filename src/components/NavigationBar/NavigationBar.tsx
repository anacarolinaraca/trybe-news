import { useContext, useState } from 'react';
import style from './NavigationBar.module.css';
import { NewsContext } from '../../context/NewsContext';
import { Link, useLocation } from 'react-router-dom';
import { NewsType } from '../../types/type';
import vetorHorizontal from '../../images/vetorListHorizontal.svg';
import vetorVetical from '../../images/vetorListVertical.svg';
const NavigationBar = () => {
  const { latestNews } = useContext(NewsContext);
  const [listPresentation, setListPresentation] = useState(latestNews);
  useLocation();

  const listaOfPresentation = (tipoFiltro: string) => {
    let listFavorites: NewsType[] = [];
    const getLocalStorageFavoriteNews = localStorage.getItem('favoriteNews');
    switch (tipoFiltro) {
      case 'Favoritas':
        if (getLocalStorageFavoriteNews !== null) {
          listFavorites = JSON.parse(getLocalStorageFavoriteNews);
        }
        setListPresentation(
          listFavorites.filter((news) => news.favoritar === true)
        );
        break;
      case 'Mais recentes':
        setListPresentation(listPresentation.map((news) => news));
        break;
      case 'Release':
        setListPresentation(
          latestNews.filter((news) => news.tipo === 'Release')
        );
        break;
      case 'Noticia':
        setListPresentation(
          latestNews.filter((news) => news.tipo === 'Noticia')
        );
        break;
      default:
        setListPresentation(latestNews);
    }
  };

  return (
    <>
      <nav className={style.navBarContainer}>
        <div className={style.navLink}>
          <Link
            to='/recent'
            onClick={() => {
              listaOfPresentation('Mais recentes');
            }}
          >
            Mais recentes
          </Link>
          <Link
            to='/release'
            onClick={() => {
              listaOfPresentation('Release');
            }}
          >
            Release
          </Link>
          <Link
            to='/news'
            onClick={() => {
              listaOfPresentation('Notícia');
            }}
          >
            Notícia
          </Link>
          <Link
            to='/favorites'
            onClick={() => {
              listaOfPresentation('Favoritas');
            }}
          >
            Favoritas
          </Link>
        </div>
        <section className={style.imgVetor}>
          <img src={vetorHorizontal} alt='' />
          <img src={vetorVetical} alt='' />
        </section>
      </nav>
    </>
  );
};

export default NavigationBar;
