// In your component file
import { collection, addDoc } from "firebase/firestore";
import { db } from "./Firebase";  // Adjust path as needed
import React from 'react';

function AddArticleButton() {
  const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
    .slice(0, 50); // Limit slug length
};
  const handleAddArticle = async () => {
    const article = {
      title: "AI in Healthcare: Revolutionizing Patient Care and Medical Research",
      subTitle: "Exploring the Impact of Artificial Intelligence in Modern Medicine",
      slug: createSlug("Your Article Title"),
      imageUrl: "https://example.com/ai-healthcare.jpg",
      subImageUrl: "https://example.com/author-ai-health.jpg",
      publishDate: "August 19, 2024 at 11:44:43 UTC+3",
      hashTag: ["ai", "healthcare", "technology", "innovation"],
      excerpt: "Artificial Intelligence is transforming healthcare...",
      content: [
        {
          type: "text",
          content: "Artificial Intelligence (AI) is no longer a futuristic concept..."
        },
        {
          type: "image",
          url: "https://example.com/ai-diagnosis.jpg",
          alt: "AI diagnosing medical images",
          caption: "AI-powered tools can analyze medical images with incredible accuracy."
        },
        {
          type: "code",
          content: "def predict_patient_outcome(patient_data):\n    model = load_model('healthcare_ai_model')\n    prediction = model.predict(patient_data)\n    return prediction",
          language: "python"
        }
      ],
      meta: {
        views: 0,
        shares: 0,
        readingTime: 6
      },
      relatedArticles: ["ai-music-revolution", "flutter-health-apps", "nodejs-healthcare-backend"]
    };

    try {
      const docRef = await addDoc(collection(db, "article"), article);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <button onClick={handleAddArticle} 
    style={{ 
        backgroundColor: 'blue', 
        color: 'white', 
        padding: '10px 20px', 
        borderRadius: '5px', 
        border: 'none', 
        cursor: 'pointer' 
    }}>
      Add Sample Article to Firebase
    </button>
  );
}

export default AddArticleButton;