const RestrictedPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <div className="flex justify-center">
        <span className="mr-2">You dont have </span>
        <div className="flex flex-col">
          <span>a̶̱͝</span>
          <span>a̸͚͊</span>
          <span>ą̷̛̃̄̈</span>
          <span>á̷̡̼͍̩̼̈́̍</span>
          <span>ą̶̧̦͕̐͆̈́͊̚͠</span>
          <span>a̵</span>
          <span className="text-red-800">access</span>
        </div>
        <span className="mt-auto text-red-800">!</span>
      </div>

      <p className="text-sm opacity-25">
        logout? deleting session? figure out yourself!
      </p>
    </div>
  );
};

export default RestrictedPage;
