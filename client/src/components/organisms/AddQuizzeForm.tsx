import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

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
import { addQuizAPI } from "@/api";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/auth";

export default function AddQuizzeForm() {
  const { toast } = useToast();
  const { userId } = useAuth();
  const form = useForm<AddQuizeFormData>({
    resolver: zodResolver(addQuizSchema),
    defaultValues: {
      title: "",
      description: "",
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
    await addQuizAPI(data.title, data.description, userId)
      .then(() => {
        toast({
          title: "Quiz Saved Successfully!",
          description: "Your quiz has been added successfully.",
        });
        form.reset();
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
