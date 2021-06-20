import express, { Request, Response } from 'express';
import { Ticket } from '../models/ticket';

const router = express.Router();

router.get('/api/tickets/:id', async (req: Request, res: Response) => {
  const ticketId = req.params.id;
  const ticket = await Ticket.findById(ticketId);

  if (!ticket) {
    console.log('not found ticket');
    return res.sendStatus(404);
  }

  res.send(ticket);
});

export { router as showTicketRouter };