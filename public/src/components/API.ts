export function addRoom(room: any) {
  return fetch("http://localhost:4000/", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(room),
  });
}
