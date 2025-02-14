import Layout from "@/components/templates/Layout";
import QuizzeCard from "@/components/molecules/QuizzeCard";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteQuizAPI, getQuizzesAPI } from "@/api";
import LoadingSpinner from "@/components/atoms/LoadingSpinner";
import { useToast } from "@/hooks/use-toast";

export default function Dashboard() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const query = useQuery({ queryKey: ["quizzes"], queryFn: getQuizzesAPI });
  const mutation = useMutation({
    mutationFn: deleteQuizAPI,
    onSuccess: () => {
      toast({
        title: "Quiz Deleted",
        description: "The quiz was successfully removed.",
      });
      queryClient.invalidateQueries({ queryKey: ["quizzes"] });
    },
  });

  function handleDelete(id: string) {
    mutation.mutate(id);
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6 text-center min-h-screen">
        {(query.isLoading || query.isFetching) && <LoadingSpinner />}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {query.data?.map((quiz) => (
            <QuizzeCard
              key={quiz.id}
              id={quiz.id}
              title={quiz.title}
              description={quiz.description}
              createdAt={quiz.createdAt}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
