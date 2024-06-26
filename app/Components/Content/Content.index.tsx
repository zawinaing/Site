import Operations from "./Operations/Operations";
import UserCard from "./User/UserCard";

export default function Content() {
  const data = [
    {
      id: 1,
      name: "Dr Nader Khandanpour",
      hospitals: [
        {
          id: 1,
          name: "Spire Little Aston Hospital",
          subtitle: "Sutton Conldfield Little Aston Halt",
        },
        {
          id: 2,
          name: "Birmingham Hospital",
          subtitle: "Sutton Conldfield Little Aston Halt",
        },
      ],
      fellowShip: ["HEADACHE", "MEDICINE", "EPILEPSY"],

      services: [],
      isOffer: false,
    },
  ];

  return (
    <section className="w-[80vw] small:w-full p-3 border border-b-gray-400/60">
      <Operations />
      <div>
        <UserCard isRecommended={true} isOffer={true} />
        <UserCard isRecommended={false} isOffer={false} />
        <UserCard isRecommended={false} isOffer={true} />
      </div>
    </section>
  );
}
