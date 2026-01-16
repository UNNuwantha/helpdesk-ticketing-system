const router = require("express").Router();
const protect = require("../middleware/authMiddleware");
const { createTicket, getTickets } = require("../controllers/ticketController");

router.post("/", protect, createTicket);
router.get("/", protect, getTickets);

module.exports = router;
