import React, { useState } from 'react';
import db from './firebase-config'; // Import Firestore instance
import { collection, query, where, getDocs } from 'firebase/firestore';

const DocumentCount = () => {
  const [districtName, setDistrictName] = useState('');
  const [bankName, setBankName] = useState('');
  const [documentCount, setDocumentCount] = useState(0);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      if (districtName && bankName) {
        const q = query(collection(db, 'people'), 
                        where('District ', '==', districtName),
                        where('Bank Name', '==', bankName));
        const querySnapshot = await getDocs(q);
        const count = querySnapshot.size;
        setDocumentCount(count);
        console.log('Document count:', count); // Log document count to the console
      }
    } catch (error) {
      console.error('Error getting documents: ', error);
    }
  };

  const handleDistrictNameChange = (event) => {
    setDistrictName(event.target.value);
  };

  const handleBankNameChange = (event) => {
    setBankName(event.target.value);
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
        <div>
          <label>
            Bank Name:
            <input type="text" value={bankName} onChange={handleBankNameChange} />
          </label>
        </div>
        <button type="submit">Search</button>
      </form>
      <div>
        {documentCount > 0 ? (
          <p>Number of Documents: {documentCount}</p>
        ) : (
          <p>No documents found for the specified district and bank name.</p>
        )}
      </div>
    </div>
  );
};

export default DocumentCount;
