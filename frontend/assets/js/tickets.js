document.getElementById("ticketForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const ticket = {
    title: title.value,
    description: description.value,
    priority: priority.value
  };

  await fetch(`${API}/tickets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("token")
    },
    body: JSON.stringify(ticket)
  });

  loadTickets();
});

async function loadTickets() {
  const res = await fetch(`${API}/tickets`, {
    headers: { "Authorization": localStorage.getItem("token") }
  });

  const data = await res.json();

  document.getElementById("ticketsList").innerHTML = data.map(ticket => `
    <div class="ticket">
      <h3>${ticket.title}</h3>
      <p>${ticket.description}</p>
      <small>${ticket.priority}</small>
    </div>
  `).join("");
}

loadTickets();
