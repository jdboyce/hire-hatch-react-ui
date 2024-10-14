export const getJobs = async () => {
  const response = await fetch("/mockJobs.json");
  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }
  return response.json();
};
