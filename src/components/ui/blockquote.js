export default function Blockquote({ children, author }) {
  return (
    <blockquote className="border-l-4 border-pink px-5 py-2">
      <p className="text-xl font-semibold"> “{children}” </p>
      <p className="mt-4 text-zinc-500">—{author}</p>
    </blockquote>
  );
}
