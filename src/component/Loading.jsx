function Loading() {
  return (
    <div className="flex items-center w-300 justify-center h-screen ">
      <div
        className="animate-spin inline-block w-12 h-12 border-[4px] border-current border-t-transparent text-stone-600 rounded-full dark:text-stone-500"
        role="status"
        aria-label="loading"
      ></div>
    </div>
  );
}

export default Loading;
