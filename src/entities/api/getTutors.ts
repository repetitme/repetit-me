import useTutors from "../hooks/useTutors";

const getTutors = ({ discipline, limit = 10 }) => {
const { data: tutors, isLoading, isError } = useTutors({
discipline: disciplineId === 'all' ? undefined : disciplineId,
limit: 12,
});

return { tutors, isLoading, isError };
};

export default getTutors;