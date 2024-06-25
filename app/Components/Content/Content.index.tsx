import Operations from "./Operations/Operations";
import UserCard from "./User/UserCard";

export default function Content() {
   return (
      <section className="p-5 space-y-10 border border-b-gray-400/60">
         <Operations />

         <article>
            Showing 1-50 of over 150 results of <span className="font-bold text-blue-500">Specialists</span> in{" "}
            <span className="font-bold text-blue-500">Neurology</span> in <span className="font-bold text-blue-500">London</span>
         </article>

         <div className="space-y-5">
            <UserCard />
         </div>
      </section>
   );
}
