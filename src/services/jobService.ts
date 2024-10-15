export const getJobs = async () => {
  const response = await fetch("http://localhost:3001/jobs");
  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }
  return response.json();
};
