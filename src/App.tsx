import { Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import Header from './components/Header/Header';
import LatestNews from './components/LatestNews/LatestNews';
import { useContext, useEffect } from 'react';
import { NewsContext } from './context/NewsContext';
import { IBGE_API } from './services/api';
import NavigationBar from './components/NavigationBar/NavigationBar';
import RecentNews from './components/RecentNews/RecentNews';
import TypeReleasesNews from './components/TypeReleasesNews/TypeReleasesNews';
import TypeNews from './components/TypeNews/TypeNews';
import FavoriteNews from './components/FavoriteNews/FavoriteNews';

function App() {
  const { latestNews, setLatestNews } = useContext(NewsContext);

  useEffect(() => {
    const fetchLatestNews = async () => {
      const newsItems = await IBGE_API();
      setLatestNews(newsItems);
    };
    fetchLatestNews();
  }, []);

  const isLatestNewsItem = latestNews[0];
  return (
    <>
      <Header />
      <div className={style.content}>
        {isLatestNewsItem && <LatestNews news={isLatestNewsItem} />}
        <Routes>
          <Route path='/' element={<NavigationBar />} />
          <Route
            path='/favorites'
            element={
              <>
                <NavigationBar />
                <FavoriteNews />
              </>
            }
          />
          <Route
            path='/recent'
            element={
              <>
                <NavigationBar />
                <RecentNews />
              </>
            }
          />
          <Route
            path='/release'
            element={
              <>
                <NavigationBar />
                <TypeReleasesNews />
              </>
            }
          />
          <Route
            path='/news'
            element={
              <>
                <NavigationBar />
                <TypeNews />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
