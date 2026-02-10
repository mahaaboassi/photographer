 const Steps = ({ step }: { step: number }) => {
  return (
    <div className="flex w-full gap-2 justify-center">
      {["Service", "Information", "Confirmation"].map((label, i) => {
        const index = i + 1;
        const active = step >= index;

        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`h-7 w-7 sm:w-10 sm:h-10 flex items-center justify-center border font-bold
                ${active ? "text-[var(--main)] border-[var(--main)]" : "text-[var(--light)] border-[var(--light)]"}`}
              >
                {index}
              </div>
              <span className="text-[0.6rem] sm:text-sm">{label}</span>
            </div>

            {index !== 3 && (
              <div
                className={`mx-2 w-10 sm:w-12 md:w-24 h-[2px] mt-[-20px]
                ${step > index ? "bg-[var(--main)]" : "bg-[var(--light)]"}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Steps