export function addRoom(room: any) {
  return fetch("http://localhost:4000", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(room),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
}
