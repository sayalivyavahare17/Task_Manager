import React, { useEffect, useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { db } from '../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      const querySnapshot = await getDocs(collection(db, 'tasks'));
      setTasks(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    };
    fetchTasks();
  }, [tasks]);

  const handleAddTask = async (task) => {
    await addDoc(collection(db, 'tasks'), task);
  };

  const handleDeleteTask = async (id) => {
    await deleteDoc(doc(db, 'tasks', id));
  };

  return (
    <div className="p-6">
      <TaskForm onAddTask={handleAddTask} />
      <div className="my-8">
        {loading ? (
          <img src="/loading.gif" alt="Loading..." className="mx-auto" />
        ) : (
          <TaskList tasks={tasks} onDelete={handleDeleteTask} />
        )}
      </div>
    </div>
  );
};

export default Home;
