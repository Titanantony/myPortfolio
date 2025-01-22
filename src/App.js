import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { collection, query, where, getDocs } from 'firebase/firestore';
import './App.css';
import { db } from './Blog/Firebase/Firebase';

// Layouts
import RootLayout from './Layout/RootLayout';

// Pages
import Portfolio from './website/Portfolio';
import MyBlog from './Blog/Blog';
import ArticleDetail from './Blog/ArticleDetail/ArticleDetail';
import AddArticlePage from './Blog/AddArticlePage';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import LoadingFallback from './components/LoadingFallback';
import ArticleError from './Blog/components/ArticleError';
import ArticleSkeleton from './Blog/components/ArticleSkeleton';
import { Suspense } from 'react';

// Article loader function
const articleLoader = async ({ params }) => {
  try {
    const articlesRef = collection(db, 'article');
    const q = query(articlesRef, where('slug', '==', params.slug));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) return null;
    
    const doc = querySnapshot.docs[0];
    return {
      id: doc.id,
      ...doc.data(),
      publishDate: doc.data().publishDate?.toDate?.() || new Date()
    };
  } catch (error) {
    console.error('Error loading article:', error);
    return null;
  }
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<RootLayout />}
      errorElement={<ErrorBoundary />}
    >
      <Route index element={<Portfolio />} />
      
      <Route path='myBlog'>
        <Route
          index
          element={
            <Suspense fallback={<LoadingFallback />}>
              <MyBlog />
            </Suspense>
          }
        />
        <Route
          path='article/:slug'
          element={
            <Suspense fallback={<ArticleSkeleton />}>
              <ArticleDetail />
            </Suspense>
          }
          loader={articleLoader}
          errorElement={<ArticleError />}
        />
        <Route 
          path='add-article' 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <AddArticlePage />
            </Suspense>
          }
        />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;