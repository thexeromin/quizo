import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (email === "sins93558@gmail.com" && password === "sins93558") {
      res
        .status(200)
        .json({ msg: "success", userId: "cm73gkccw0000g7jos43nml1b" });
        return;
    }
    res.status(401).json({ error: "Unauthorized" });
  } catch (error) {
    res.status(500).json({ error: "Error during login" });
  }
};
