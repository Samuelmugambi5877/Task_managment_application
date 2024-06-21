// Listening to changes
getTasks(snapshot => {
    snapshot.docChanges().forEach(change => {
      if (change.type === 'added') {
        console.log('New task: ', change.doc.data());
      }
      if (change.type === 'modified') {
        console.log('Modified task: ', change.doc.data());
      }
      if (change.type === 'removed') {
        console.log('Removed task: ', change.doc.data());
      }
    });
  });
  