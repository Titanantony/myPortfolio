// Blog/AddArticlePage.js
import React from 'react';
import AddArticleButton from './Firebase/addArticle';
import './AddArticlePage.css';

const AddArticlePage = () => {
  return (
    <div className="add-article-page">
      <h1>Create New Article</h1>
      <AddArticleButton />
    </div>
  );
};

export default AddArticlePage;