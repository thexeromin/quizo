import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";

import { addQuizSchema, AddQuizeFormData } from "@/schemas";
import { Button } from "@/components/atoms/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/form";
import { Input } from "@/components/atoms/input";
import { Textarea } from "@/components/atoms/textarea";
import { updateQuizAPI } from "@/api";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/auth";

import { Quiz } from "@/types";

interface Props {
  quiz: Quiz;
}

export default function UpdateQuizzeForm(props: Props) {
  const queryClient = useQueryClient();
  const { quiz } = props;
  const { toast } = useToast();
  const { userId } = useAuth();
  const form = useForm<AddQuizeFormData>({
    resolver: zodResolver(addQuizSchema),
    defaultValues: {
      title: quiz.title,
      description: quiz.description,
    },
  });

  async function onSubmit(data: AddQuizeFormData) {
    if (!userId) {
      toast({
        title: "Unauthorized",
        description: "User not found.",
      });
      return;
    }
    await updateQuizAPI(quiz.id, data.title, data.description)
      .then(() => {
        toast({
          title: "Quiz Updated Successfully!",
          description: "Your quiz has been updated successfully.",
        });
        form.reset();
        queryClient.invalidateQueries({ queryKey: ["quizze"] });
      })
      .catch((err) =>
        toast({
          variant: "destructive",
          title: "Oops! Something went wrong.",
          description: err.error || "DB limit reached. Please wait or refresh",
        })
      );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Javascript Advance" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write a description"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className="animate-spin" />
                Please wait
              </>
            ) : (
              "Save"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
