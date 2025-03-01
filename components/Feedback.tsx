const FeedbackCard = ({
  data,
}: {
  data: {
    initials: string;
    message: string;
    feedback: string;
    portfolio: string;
  };
}) => {
  const { initials, message, feedback, portfolio } = data || {
    initials: "J.D.",
    message: "This coding adventure was amazing!",
    feedback: "I loved the interactive challenges!",
    portfolio: "github.com/username",
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 max-w-md">
      <div className="flex items-center mb-4">
        <div className="bg-white/30 w-12 h-12 rounded-full flex items-center justify-center mr-3 shadow-inner">
          <span className="text-white text-xl font-bold">{initials}</span>
        </div>
        <h3 className="text-white text-xl font-bold">Adventure Feedback</h3>
      </div>

      <div className="space-y-3">
        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
          <p className="text-white font-medium mb-1">Message</p>
          <p className="text-white/90">{message}</p>
        </div>

        {feedback && (
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
            <p className="text-white font-medium mb-1">Feedback</p>
            <p className="text-white/90">{feedback}</p>
          </div>
        )}

        {portfolio && (
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
            <p className="text-white font-medium mb-1">Portfolio</p>
            <p className="text-white/90">{portfolio}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackCard;
