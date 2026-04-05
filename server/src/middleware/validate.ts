import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';

export const validate = (schema: z.ZodType) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: 'Validation Error',
          errors: error.issues.map((issue) => ({
            path: issue.path.slice(1), // remove 'body'/'query' prefix
            message: issue.message,
          })),
        });
      }
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };
};
