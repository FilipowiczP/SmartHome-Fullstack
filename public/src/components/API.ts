export function addRoom(room: any) {
  return fetch("http://localhost:4000", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(room),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
}
export function turnOffAllRoom(turnOff: any, id: any) {
  return fetch(`http://localhost:4000/${id}`, {
    method: "PATCH",
    mode: "cors",
    body: JSON.stringify({ turnOffRoom: !turnOff }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
}

export function roomsList() {
  return fetch("http://localhost:4000", {
    method: "get",
    mode: "cors",
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
}
