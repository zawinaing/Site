import Operations from "./Operations/Operations";
import UserCard from "./User/UserCard";
import { DATA } from "../../data-access/data";
import { Fragment } from "react";

export default function Content() {
  return (
    <section className="w-[80vw] small:w-full p-3 border border-b-gray-400/60">
      <Operations />
      <div>
        {DATA.map(
          ({
            id,
            description,
            fellowShip,
            hospitals,
            image,
            name,
            services,
            position,
            rating,
          }) => (
            <Fragment key={id}>
              <UserCard
                isRecommended={true}
                isOffer={true}
                description={description}
                fellowShip={fellowShip}
                hospitals={hospitals}
                image={image}
                name={name}
                // @ts-ignore
                services={services}
                position={position}
                rating={rating}
              />
            </Fragment>
          )
        )}
      </div>
    </section>
  );
}
