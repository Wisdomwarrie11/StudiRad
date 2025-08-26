
import React, { useState } from 'react';
import axios from 'axios';

function AddCourse() {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    image: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      setError('You need to be logged in to create a course.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/api/courses/create',
        courseData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data);
    } catch (err) {
      setError('Error creating course. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="add-course-container">
      <h3>Create New Course</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Course Title</label>
          <input
            type="text"
            name="title"
            value={courseData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Course Description</label>
          <textarea
            name="description"
            value={courseData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Course Image URL</label>
          <input
            type="text"
            name="image"
            value={courseData.image}
            onChange={handleChange}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Create Course</button>
      </form>
    </div>
  );
}

export default AddCourse;
