Instead of accessing the data directly, use the `.then()` method to handle the promise that is returned by the `getDoc()` function.  This ensures that the code inside the `.then()` block only executes after the data has been fully loaded.

```javascript
import { getDoc, doc } from 'firebase/firestore';

// ... other code

getDoc(doc(db, 'collection', 'docId')).then((snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.data();
    console.log(data.propertyName); // Access property after data is loaded
  } else {
    console.log('No such document!');
  }
}).catch((error) => {
  console.error('Error fetching document:', error);
});
```

Alternatively, use async/await:

```javascript
import { getDoc, doc } from 'firebase/firestore';

// ... other code

async function fetchData() {
  try {
    const snapshot = await getDoc(doc(db, 'collection', 'docId'));
    if (snapshot.exists()) {
      const data = snapshot.data();
      console.log(data.propertyName); // Access property after data is loaded
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error fetching document:', error);
  }
}
fetchData();
```