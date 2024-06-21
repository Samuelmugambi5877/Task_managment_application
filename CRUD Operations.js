// Create a new task
async function addTask(task) {
    await db.collection('tasks').add(task);
  }
  
  // Read tasks
  function getTasks(callback) {
    return db.collection('tasks').onSnapshot(callback);
  }
  
  // Update task
  async function updateTask(taskId, updatedTask) {
    await db.collection('tasks').doc(taskId).update(updatedTask);
  }
  
  // Delete task
  async function deleteTask(taskId) {
    await db.collection('tasks').doc(taskId).delete();
  }
  