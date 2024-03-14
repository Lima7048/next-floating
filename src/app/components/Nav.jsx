import Link from "next/link";
export default function Nav() {
  return (
    <div className="flex justify-end">
      <div className="m-1 box-border  h-24 w-32 gap-4  bg-blue-500  border rounded-md p-4 text-purple-50   ">
        <p>Home</p>
        <p>About</p>
      </div>
    </div>
  );
}
