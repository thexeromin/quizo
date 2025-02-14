import AddQuizzeForm from "@/components/organisms/AddQuizzeForm";
import CardFormLayout from "@/components/templates/CardFormLayout";
import Layout from "@/components/templates/Layout";

export default function AddQuizze() {
  return (
    <Layout>
      <div className="flex min-h-[90svh] w-full items-center justify-center">
        <div className="w-full max-w-sm">
          <CardFormLayout title="Add Quizze" description="Add your quizze">
            <AddQuizzeForm />
          </CardFormLayout>
        </div>
      </div>
    </Layout>
  );
}
