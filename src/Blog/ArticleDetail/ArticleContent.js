// Blog/ArticleDetail/ArticleContent.js
import React from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ArticleContent({ content }) {
  const renderContentBlock = (block, index) => {
    switch (block.type) {
      case 'text':
        return <p key={index} className="content-text">{block.content}</p>;

      case 'image':
        return (
          <figure key={index} className="content-image">
            <img src={block.url} alt={block.alt} />
            {block.caption && <figcaption>{block.caption}</figcaption>}
          </figure>
        );

      case 'code':
        return (
          <SyntaxHighlighter 
            key={index}
            language={block.language}
            style={dracula}
            className="content-code"
          >
            {block.content}
          </SyntaxHighlighter>
        );

      case 'youtube':
        return (
          <div key={index} className="video-embed">
            <iframe
              title={block.title}
              src={`https://www.youtube.com/embed/${block.videoId}`}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        );

      case 'list':
        const ListTag = block.ordered ? 'ol' : 'ul';
        return (
          <ListTag key={index} className={`content-list ${block.ordered ? 'ordered' : 'unordered'}`}>
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ListTag>
        );

      default:
        return null;
    }
  };

  return <div className="article-content">{content.map(renderContentBlock)}</div>;
}

ArticleContent.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['text', 'image', 'code', 'youtube', 'list']).isRequired,
      content: PropTypes.any,
      url: PropTypes.string,
      alt: PropTypes.string,
      caption: PropTypes.string,
      videoId: PropTypes.string,
      ordered: PropTypes.bool,
      items: PropTypes.arrayOf(PropTypes.string),
      language: PropTypes.string  // Added for code blocks
    })
  ).isRequired
};