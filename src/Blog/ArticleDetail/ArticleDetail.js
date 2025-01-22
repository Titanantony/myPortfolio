// Blog/ArticleDetail/ArticleDetail.js
import React, { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import ArticleContent from './ArticleContent';
import './ArticleDetail.css';
import MetaHead from '../../components/SEO/MetaHead';

export default function ArticleDetail() {
  const article = useLoaderData();
  const navigate = useNavigate();

  // Fallback for missing article data
  useEffect(() => {
    if (!article) {
      navigate('/myBlog', { state: { error: 'Article not found' } });
    }
  }, [article, navigate]);

  if (!article) return null;

  return (
    <>
    <MetaHead
    title="Article Title"
        description="Article excerpt..."
        image="article-image.jpg"
      />
    <article className="article-detail">
      <header className="article-header">
        <h1 className="article-title">{article.title}</h1>
        <div className="article-meta">
          <img 
            src={article.subImageUrl} 
            alt={article.subTitle} 
            className="author-image"
          />
          <div>
            <p className="author-name">{article.subTitle}</p>
            <time className="publish-date">
              {new Date(article.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </div>
      </header>

      <img
        src={article.imageUrl}
        alt={article.title}
        className="featured-image"
      />

      <ArticleContent content={article.content} />

      <section className="article-footer">
        <div className="social-sharing">
          <button className="share-button twitter">Share on Twitter</button>
          <button className="share-button linkedin">Share on LinkedIn</button>
        </div>
        <div className="related-articles">
          <h3>Related Articles</h3>
          {/* Implement related articles component */}
        </div>
      </section>
    </article>
    </>
  );
}