import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import './Blog.css';
import Footer from '../SharedComponents/Footer';
import { db } from './Firebase/Firebase';

const MyBlog = ({ onFilterLatest }) => {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]); // Store all articles

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesCollection = collection(db, 'article');
        const articlesSnapshot = await getDocs(articlesCollection);

        if (!articlesSnapshot.empty) {
          const articlesList = articlesSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            publishDate: doc.data().publishDate?.toDate?.() || new Date(), // Convert timestamp to date
          }));

          const sortedArticles = articlesList.sort(
            (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
          );

          setAllArticles(sortedArticles); // Store all articles
          setFeaturedArticle(sortedArticles[0]); // Set featured article
          setArticles(sortedArticles.slice(1)); // Set remaining articles
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  const handleFilterLatest = () => {
    const sortedArticles = [...allArticles].sort(
      (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );

    setFeaturedArticle(sortedArticles[0]); // Update the featured article
    setArticles(sortedArticles.slice(1)); // Update the remaining articles
  };

  // Pass the function to the parent via props
  useEffect(() => {
    if (onFilterLatest) onFilterLatest(handleFilterLatest);
  }, [onFilterLatest]);

  return (
    <div className="design-journal">
      <main className="main-content">
        <aside className="sidebar">
          <h2 className="sidebar-title">Popular&nbsp;content</h2>
          <ul className="sidebar-list">
            <li>➡️ Design</li>
            <li>➡️ Product</li>
            <li>➡️ Software Engineering</li>
            <li>➡️ Customer Success</li>
            <li>➡️ Leadership</li>
            <li>➡️ Management</li>
          </ul>
        </aside>

        <div className="content">
          <div className="tag">Recently Published</div>

          {featuredArticle && (
            <div className="featured-article">
              <div className="featured-image">
                <img src={featuredArticle.imageUrl} alt="Featured article" />
              </div>
              <div className="featured-content">
                <h2 className="featured-title">{featuredArticle.title}</h2>
                <p className="featured-text">{featuredArticle.excerpt}</p>
                <div className="author-info">
                  <img
                    src={featuredArticle.subImageUrl}
                    alt="Author"
                    className="author-image"
                  />
                  <span className="author-name">{featuredArticle.subTitle}</span>
                </div>
              </div>
            </div>
          )}

          <div className="articles-grid">
            {articles.map((article) => (
              <div key={article.id} className="article">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="article-image"
                />
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <div className="author-info">
                  <img
                    src={article.subImageUrl}
                    alt="Author"
                    className="author-image"
                  />
                  <div>
                    <span className="author-name" style={{ display: 'block' }}>
                      {article.subTitle}
                    </span>
                    <span className="publish-date" style={{ display: 'block' }}>
                      {article.publishDate.toDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyBlog;
