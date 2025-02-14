import { getQuizzeAPI } from "@/api";
import LoadingSpinner from "@/components/atoms/LoadingSpinner";
import UpdateQuizzeForm from "@/components/organisms/UpdateQuizzeForm";
import CardFormLayout from "@/components/templates/CardFormLayout";
import Layout from "@/components/templates/Layout";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export default function UpdateQuizze() {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <p>Quizze id not found</p>;
  }

  const query = useQuery({
    queryKey: ["quizze"],
    queryFn: () => getQuizzeAPI(id),
  });

  return (
    <Layout>
      <div className="flex min-h-[90svh] w-full items-center justify-center">
        <div className="w-full max-w-sm">
          {query.isLoading || query.isFetching ? (
            <LoadingSpinner />
          ) : !query.data ? (
            <p>No quize found</p>
          ) : (
            <CardFormLayout
              title="Update Quizze"
              description={`Update quizze #${id}`}
            >
              <UpdateQuizzeForm quiz={query.data} />
            </CardFormLayout>
          )}
        </div>
      </div>
    </Layout>
  );
}
