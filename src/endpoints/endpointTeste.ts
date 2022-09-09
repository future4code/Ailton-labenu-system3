import { Request, Response } from "express";

export async function endpointTeste(req: Request, res: Response) {
  try {
    res.send("Mensagem de sucesso");
  } catch (error: any) {
    res.send("Mensagem de erro");
  }
}
