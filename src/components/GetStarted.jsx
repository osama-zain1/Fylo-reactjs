const GetStarted = () => {
  return (
    <section>
      <div className="container relative">
        <div className="bg-[#1c2230] absolute left-[50%] translate-x-[-50%] top-[-150px] rounded-[5px] element-center flex-col w-[865px] max-w-full min-h-[275px] text-white text-center p-[30px]">
          <h3 className="text-[25px] md:text-[35px] font-semibold mb-[15px]">
            Get early access today
          </h3>
          <p className="w-[625px] max-w-full mx-auto mb-[30px]">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <form
            action=""
            className="w-full flex justify-between items-center flex-wrap md:px-[60px] gap-[30px]"
          >
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full md:flex-1 h-[50px] rounded-[30px] pl-[30px] outline-none border-none text-sm text-black font-medium"
            />
            <button
              type="submit"
              className="w-full md:w-[200px] h-[50px] bg-[#42b0d1] hover:bg-[#8cdae4] transition-all duration-200 rounded-[30px]"
            >
              Get Started For
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default GetStarted;
