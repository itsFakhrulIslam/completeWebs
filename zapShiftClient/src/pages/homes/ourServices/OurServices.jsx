import img from '../../../assets/service.png'

const OurServices = () => {
  const servicesCard = (
    <>
      <div className="card bg-base-300 w-96 shadow-sm p-10">
        <figure>
          <img className="" src={img} alt="Shoes" />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-2xl font-semibold">There is no Heading</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
        </div>
      </div>
    </>
  );

  return (
    <div className="bg-secondary rounded">
      <h3 className="capitalize text-white text-center text-4xl pt-10">
        our services
      </h3>
      <p className="text-center text-white pt-5 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nostrum
        necessitatibus molestias nisi, accusantium ducimus.
      </p>

      <div className="p-10">
        <div className="flex flex-wrap gap-2">
          {servicesCard}
          {servicesCard}
          {servicesCard}
          {servicesCard}
          {servicesCard}
          {servicesCard}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
