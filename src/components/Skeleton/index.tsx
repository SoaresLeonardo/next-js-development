type SkeletonProps = {
  lines?: number;
  height?: number;
};

const Skeleton = ({ lines = 5, height = 20 }: SkeletonProps) => {
  return (
    <div className="w-full animate-pulse">
      {[...Array(lines)].map((_, index) => (
        <div
          key={index}
          className={`bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4 cursor-progress`}
          style={{ height: height }}
        />
      ))}
    </div>
  );
};

export { Skeleton };
