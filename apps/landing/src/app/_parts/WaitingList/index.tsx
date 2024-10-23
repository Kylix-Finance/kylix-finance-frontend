import Button from "~/components/Button";
import Section from "~/components/Section";

const WaitingList = () => {
  return (
    <div className="w-full flex justify-center">
      <Section
        heading={{
          left: "Join",
          right: "to waiting list",
        }}
        contentClassName="py-9 md:py-9 lg:py-9  gap-5  backdrop-blur-md border border-primary-900 rounded-2xl"
        className="mb-44"
        description={
          " A visual breakdown of the lending and borrowing process, typically simplified into steps like:"
        }
        id="#waiting-list"
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-center gap-2.5 h-full">
            <div className="relative w-full h-full  rounded-lg ">
              <div className="absolute w-full h-full backdrop-blur-sm rounded-lg pointer-events-none" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="relative h-full w-full px-4 py-2 bg-transparent text-gray-300 placeholder-gray-500 border-none rounded-md  outline-none shadow-primary-500 shadow-inner"
              />
            </div>

            <Button color="secondary">Join</Button>
          </div>
          <p className="font-normal text-white/40 text-xs leading-5 text-center tracking-wider">
            By submitting your email address, you agree to join Kylix waitlist{" "}
          </p>
        </div>
      </Section>
    </div>
  );
};

export default WaitingList;
