import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/atoms/dialog";

interface Props {
  children: React.ReactNode;
}

export default function AuthDialog({ children }: Props) {
  const email = "sins93558@gmail.com";
  const password = "sins93558";

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Credentials</DialogTitle>
          <DialogDescription>Here are the test credentials:</DialogDescription>
        </DialogHeader>
        <div className="space-y-2">
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Password:</strong> {password}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
