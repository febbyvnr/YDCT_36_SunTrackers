// src/services/api.js

// This will use the Render URL when live, and localhost when you are testing locally
const API_URL = import.meta.env.VITE_API_URL 

// If your routes need the "/api" suffix, do this:
const FULL_API_URL = `${API_URL}/api`;

export const calculateSolar = async (data) => {
  try {
    const res = await fetch(`${API_URL}/calculate-solar`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error; // Let the component handle the error
  }
};

export const getProjects = async () => {
  try {
    const res = await fetch(`${API_URL}/projects`);
    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
  } catch (error) {
    console.error("API Error:", error);
    return []; // Return empty list on error
  }
};