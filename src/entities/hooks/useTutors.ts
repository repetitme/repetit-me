import httpRequest from "../../shared/api/httpRequest";

export const useTutors = () => {
  const getTutors = async (params?: Record<string, string | number | boolean | undefined>) =>
    httpRequest<{ tutors: Array<{ id: string; name: string }> }>('GET', '/tutors', { params });

  const getTutorById = async (id: string) =>
    httpRequest<{ id: string; name: string }>('GET', `/tutors/${id}`);

  return { getTutors, getTutorById };
};

export default useTutors;