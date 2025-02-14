import { Link } from "react-router";
import { useAuth } from "@/context/auth";
import { Button } from "@/components/atoms/button";
import Layout from "@/components/templates/Layout";

export default function Dashboard() {
  const { userId } = useAuth();

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6 text-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">
          🎉 Welcome to Your Dashboard
        </h1>
        <p className="text-lg text-gray-600 mb-6">User ID: {userId}</p>

        <div className="space-x-4">
          <Link to="/quizzes">
            <Button variant="outline">📚 Manage Quizzes</Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
