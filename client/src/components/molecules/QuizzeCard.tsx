import { Button } from "@/components/atoms/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { format } from "date-fns";

interface Props {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  onDelete(id: string): void
}

export default function QuizzeCard(props: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{format(new Date(props.createdAt), "MMMM d, yyyy 'at' h:mm a")}</p>
      </CardContent>
      <CardFooter className="flex justify-center items-center gap-2">
        <Button variant="outline" size="sm">
          Update
        </Button>
        <Button variant="destructive" size="sm" onClick={() => props.onDelete(props.id)}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
