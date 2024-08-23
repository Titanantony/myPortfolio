import React, { useState, useEffect } from 'react'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
import './Blog.css'
import Footer from '../SharedComponents/Footer'
import { db } from './Firebase/Firebase'

const MyBlog = () => {
  const [featuredArticle, setFeaturedArticle] = useState(null)
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesCollection = collection(db, 'article')
        const articlesSnapshot = await getDocs(articlesCollection)

        if (!articlesSnapshot.empty) {
          const articlesList = articlesSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            publishDate: formatDate(doc.data().publishDate),
          }))

          const reversedArticles = articlesList.reverse()

          // Set the most recent article as featured
          setFeaturedArticle(reversedArticles[0])

          // Set the rest of the articles, excluding the featured one
          setArticles(reversedArticles.slice(1))

          console.log('No documents found')
        }
      } catch (error) {
        console.error('Error fetching articles:', error)
      }
    }

    fetchArticles()
  }, [])

  const formatDate = (timestamp) => {
    if (timestamp && timestamp.toDate instanceof Function) {
      const date = timestamp.toDate()
      return date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    }
    return 'Date unavailable'
  }

  const testFetchById = async () => {
    try {
      const docRef = doc(db, 'article', '5h2vfbMfUTilrgkvoiPn')
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        console.log('Found data')
      } else {
        console.log('No such document!')
      }
    } catch (error) {
      console.error('Error fetching document:', error)
    }
  }

  testFetchById()

  console.log('Firebase API Key:', process.env.REACT_APP_FIREBASE_API_KEY);


  return (
    <div className='design-journal'>
      {/* Main content */}
      <main className='main-content'>
        {/* Sidebar */}
        <aside className='sidebar'>
          <h2 className='sidebar-title'>Popular&nbsp;content</h2>
          <ul className='sidebar-list'>
            <li>➡️ Design</li>
            <li>➡️ Product</li>
            <li>➡️ Software Engineering</li>
            <li>➡️ Customer Success</li>
            <li>➡️ Leadership</li>
            <li>➡️ Management</li>
          </ul>
        </aside>

        {/* Content */}
        <div className='content'>
          <div className='tag'>Recently Published</div>

          {/* Featured article */}
          {featuredArticle && (
            <div className='featured-article'>
              <div className='featured-image'>
                <img src={featuredArticle.imageUrl} alt='Featured article' />
              </div>
              <div className='featured-content'>
                <h2 className='featured-title'>{featuredArticle.title}</h2>
                <p className='featured-text'>{featuredArticle.excerpt}</p>
                <div className='author-info'>
                  <img
                    src={featuredArticle.subImageUrl}
                    alt='Author'
                    className='author-image'
                  />
                  <span className='author-name'>
                    {featuredArticle.subTitle}
                  </span>
                  {/* <span className="publish-date">{featuredArticle.publishDate}</span> */}
                </div>
              </div>
            </div>
          )}

          {/* Other articles */}
          <div className='articles-grid'>
            {articles.map((article) => (
              <div key={article.id} className='article'>
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className='article-image'
                />
                <h3 className='article-title'>{article.title}</h3>
                <p className='article-excerpt'>{article.excerpt}</p>
                <div className='author-info'>
                  <img
                    src={article.subImageUrl}
                    alt='Author'
                    className='author-image'
                  />
                  <div>
                    <span className='author-name' style={{ display: 'block' }}>
                      {article.subTitle}
                      <br />
                    </span>

                    <span className='publish-date' style={{ display: 'block' }}>
                      {article.publishDate}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {/* <div className="pagination">
            <button className="pagination-btn">← Previous</button>
            <button className="pagination-btn">Next →</button>
          </div> */}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MyBlog
