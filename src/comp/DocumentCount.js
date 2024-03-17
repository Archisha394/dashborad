import React, { useState } from 'react';
import db from './firebase-config'; // Import Firestore instance
import { collection, query, where, getDocs } from 'firebase/firestore';

const DocumentCount = () => {
  const [districtName, setDistrictName] = useState('');
  const [documents, setDocuments] = useState([]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      if (districtName) {
        const q = query(collection(db, 'people'), where('District', '==', districtName));
        const querySnapshot = await getDocs(q);
        setDocuments(querySnapshot.docs.map(doc => doc.data()));
      }
    } catch (error) {
      console.error('Error getting documents: ', error);
    }
  };

  const handleDistrictNameChange = (event) => {
    setDistrictName(event.target.value);
  };

  return (
    <div>
      <h2>Document Details</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            District:
            <input type="text" value={districtName} onChange={handleDistrictNameChange} />
          </label>
        </div>
        <button type="submit">Search</button>
      </form>
      <div>
        {documents.length > 0 ? (
          <ul>
            {documents.map((document, index) => (
              <li key={index}>
                <strong>Document {index + 1}:</strong>
                <ul>
                  {Object.entries(document).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p>No documents found for the specified district.</p>
        )}
      </div>
    </div>
  );
};

export default DocumentCount;
