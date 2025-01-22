import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import './Blog.css';
import Footer from '../SharedComponents/Footer';
import { db } from './Firebase/Firebase';
import { Link } from 'react-router-dom';

const FILTERS = {
  LATEST: 'Recently Published',
  AI: 'AI',
  FLUTTER: 'Flutter',
  NODEJS: 'NodeJs',
  GITHUB: 'Github'
};

const MyBlog = ({ onFilterLatest }) => {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [activeFilter, setActiveFilter] = useState(FILTERS.LATEST);

  // Data fetching
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesSnapshot = await getDocs(collection(db, 'article'));
        if (articlesSnapshot.empty) return;

        const articlesList = articlesSnapshot.docs.map(parseArticleData);
        const sortedArticles = sortArticlesByDate(articlesList);
        
        updateArticlesDisplay(sortedArticles);
        setAllArticles(sortedArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  // Article data helpers
  const parseArticleData = doc => ({
    id: doc.id,
    ...doc.data(),
    publishDate: doc.data().publishDate?.toDate?.() || new Date()
  });

  const sortArticlesByDate = articles => 
    [...articles].sort((a, b) => b.publishDate - a.publishDate);

  // Filter handlers
  const handleFilter = (keyword, filterName) => {
  setActiveFilter(filterName);
  const filtered = allArticles.filter(article => {
    // Validate hashTag structure
    if (!Array.isArray(article.hashTag)) return false;
    
    return article.hashTag.some(tag => {
      if (typeof tag !== 'string') return false;
      return tag.toLowerCase().includes(keyword.toLowerCase());
    });
  });
  handleFilterResponse(filtered, keyword);
};
  const handleLatestFilter = () => {
    setActiveFilter(FILTERS.LATEST);
    const sorted = sortArticlesByDate(allArticles);
    handleFilterResponse(sorted, 'latest articles');
  };

  // Common response handler
  const handleFilterResponse = (articles, filterTerm) => {
    if (articles.length === 0) {
      setErrorMessage(`No articles found for ${filterTerm}`);
      updateArticlesDisplay([]);
      return;
    }

    setErrorMessage('');
    updateArticlesDisplay(articles);
  };

  const updateArticlesDisplay = articles => {
    setFeaturedArticle(articles[0] || null);
    setArticles(articles.slice(1));
  };

  // Filter button generator
  const createFilterButton = (filterName, keyword) => (
    <button
      key={filterName}
      className={`tag ${activeFilter === filterName ? 'active' : ''}`}
      onClick={() => handleFilter(keyword, filterName)}
      aria-pressed={activeFilter === filterName}
    >
      {filterName}
    </button>
  );

  return (
    <div className="design-journal">
      <main className="main-content">
        <aside className="sidebar">
          <h2 className="sidebar-title">Popular&nbsp;content</h2>
          <ul className="sidebar-list">
            {['Project Showcases', 'Technical Guides', 'Industry News', 
              'Opinion Pieces', 'Community Spotlights', 'Event Summaries']
              .map((item, index) => (
                <li key={index}>➡️ {item}</li>
              ))}
          </ul>
        </aside>

        <div className="content">
          <div className="filter-bar">
            <button
              className={`tag ${activeFilter === FILTERS.LATEST ? 'active' : ''}`}
              onClick={handleLatestFilter}
              aria-pressed={activeFilter === FILTERS.LATEST}
            >
              {FILTERS.LATEST}
            </button>
            {[
              [FILTERS.AI, 'ai'],
              [FILTERS.FLUTTER, 'flutter'],
              [FILTERS.NODEJS, 'nodejs'],
              [FILTERS.GITHUB, 'github']
            ].map(([filter, keyword]) => createFilterButton(filter, keyword))}
          </div>

          {featuredArticle && (
            <FeaturedArticleComponent article={featuredArticle} />
          )}

          <div className="articles-grid">
            {errorMessage ? (
              <h2 className="error-message">{errorMessage}</h2>
            ) : (
              articles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Sub-components for better readability
const FeaturedArticleComponent = ({ article }) => (
  <Link to={`/myBlog/article/${article.slug}`} className="featured-article-link" >
  <div className="featured-article">
    <div className="featured-image">
      <img src={article.imageUrl} alt="Featured article" />
    </div>
    <div className="featured-content">
      <h2 className="featured-title">{article.title}</h2>
      <p className="featured-text">{article.excerpt}</p>
      <AuthorInfo article={article} />
    </div>
  </div>
  </Link>
);

const ArticleCard = ({ article }) => (
  <Link to={`/myBlog/article/${article.slug}`} className="article-link">
  <div className='article'>
    <img src={article.imageUrl} alt={article.title} className="article-image" />
    <h3 className="article-title">{article.title}</h3>
    <p className="article-excerpt">{article.excerpt}</p>
    <AuthorInfo article={article} />
  </div>
  </Link>
);

const AuthorInfo = ({ article }) => (
  <div className="author-info">
    <img
      src={article.subImageUrl}
      alt="Author"
      className="author-image"
    />
    <div>
      <span className="author-name">{article.subTitle}</span>
      <span className="publish-date">
        {article.publishDate.toDateString()}
      </span>
    </div>
  </div>
);

export default MyBlog;