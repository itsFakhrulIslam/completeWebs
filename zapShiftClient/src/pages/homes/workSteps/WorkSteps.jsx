import img from "../../../assets/delivery-van.png";

const WorkSteps = () => {
  const titles = [
    "Booking pic up & drop",
    "Cash on delivery",
    "Delivery hub",
    "Booking SME & Corporate",
  ];

  const stepsCard = (
    <>
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
          <img className="" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{titles[1]}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
        </div>
      </div>
    </>
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl capitalize font-bold ">how it works</h2>
      <div className="px-16">
        <div className="flex  gap-5">
          {stepsCard}
          {stepsCard}
          {stepsCard}
          {stepsCard}
        </div>
      </div>
    </div>
  );
};

export default WorkSteps;
