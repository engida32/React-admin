export const posts = [
  {
    id: 1,
    title: "First Post",
    body: "This is the first post.",
    userId: 1,
    progress: "pending",
  },
  {
    id: 2,
    title: "Second Post",
    body: "This is the second post.",
    userId: 2,
    progress: "ended",
  },
  {
    id: 3,
    title: "Third Post",
    body: "This is the third post.",
    userId: 1,
    progress: "cancelled",
  },
  {
    id: 4,
    title: "Fourth Post",
    body: "This is the fourth post.",
    userId: 2,
    progress: "pending",
  },
];

export const comments = [
  {
    id: 1,
    postId: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    body: "This is a comment on the first post.",
    progress: "pending",
  },
  {
    id: 2,
    postId: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    body: "This is a comment on the second post.",
    progress: "ended",
  },
  {
    id: 3,
    postId: 3,
    name: "John Doe",
    email: "johndoe@example.com",
    body: "This is a comment on the third post.",
    progress: "cancelled",
  },
  {
    id: 4,
    postId: 1,
    name: "Jane Smith",
    email: "janesmith@example.com",
    body: "This is another comment on the first post.",
    progress: "pending",
  },
];
