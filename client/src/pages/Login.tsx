import Layout from "@/components/templates/Layout";
import LoginForm from "@/components/organisms/LoginForm";
import CardFormLayout from "@/components/templates/CardFormLayout";

export default function Login() {
  return (
    <Layout>
      <div className="flex min-h-[90svh] w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <CardFormLayout
            title="Login"
            description="Enter your email below to login to your account"
          >
            <LoginForm />
          </CardFormLayout>
        </div>
      </div>
    </Layout>
  );
}
