import ChosenDoctorCard from "./ChosenDoctorCard";
import Vacant from "./Vacant";
import Operations from "./Operations";

export default function Doctors() {
  return (
    <section className="pt-8 pb-3 px-5">
      <article className="w-full flex justify-center gap-5">
        <ChosenDoctorCard />
        <ChosenDoctorCard />
        <Vacant number="three" />
        <Vacant number="four" />
        <Operations />
      </article>
    </section>
  );
}
