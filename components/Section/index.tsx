import DefaultContainer from "../containers/DefaultContainer/index";

const Section = ({
  children,
  title,
  sectionId,
}: {
  children: any;
  title: string;
  sectionId: string;
}) => {
  return (
    <div className="w-full min-h-[240px] flex flex-col justify-center items-center">
      <DefaultContainer>
        <h2
          id={sectionId}
          className="capitalize pt-[60px] text-[20px] font-bold mb-[15px] text-left text-black dark:text-white"
        >
          {title}
        </h2>

        <div>{children}</div>
      </DefaultContainer>
    </div>
  );
};

export default Section