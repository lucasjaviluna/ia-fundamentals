type User = {
  id: string;
  email: string;
  passwordHash: string;
  role: "admin" | "member";
};

const users: User[] = [
  { id: "u-1", email: "ana@example.com", passwordHash: "hash-not-for-clients", role: "member" }
];

export function getUserForClient(id: string) {
  return users.find((user) => user.id === id);
}

export function createUser(email: string, passwordHash: string) {
  const user: User = { id: String(users.length + 1), email, passwordHash, role: "member" };
  users.push(user);
  return user;
}
