interface Comment {
  id: string;
  user: {
    name: string;
    initial: string;
    bgColor: string;
  };
  text: string;
  time: string;
  reactions: {
    likes: number;
    smiles: number;
    comments: number;
  };
}

const Container = () => {
  const comments: Comment[] = [
    {
      id: '1',
      user: {
        name: 'STARBUCKS',
        initial: 'S',
        bgColor: 'bg-purple-100',
      },
      text: 'I really wish #Starbucks would use hand wrappers for hot drinks as a standard, I keep burning my hands and am tired of bothering the...',
      time: '3d',
      reactions: {
        likes: 102,
        smiles: 4,
        comments: 15,
      },
    },
    {
      id: '2',
      user: {
        name: 'NETFLIX',
        initial: 'N',
        bgColor: 'bg-red-100',
      },
      text: 'Since yday on mobile #netflix keeps buffering the video, it keeps happening even when I redownload the app. I\'m in an area with decent...',
      time: '5d',
      reactions: {
        likes: 56,
        smiles: 1,
        comments: 31,
      },
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Feedback Input Section */}
      <div className="p-4 border-b">
        <textarea
          placeholder="Type your feedback here..."
          className="w-full min-h-[100px] p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-300 resize-none"
        />
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-500">280</span>
          <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            SUBMIT
          </button>
        </div>
      </div>

      {/* Comments List */}
      <div className="divide-y">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4">
            <div className="flex gap-3">
              {/* User Avatar */}
              <div className={`w-8 h-8 rounded-full ${comment.user.bgColor} flex items-center justify-center text-sm`}>
                {comment.user.initial}
              </div>
              
              {/* Comment Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">{comment.user.name}</span>
                  <span className="text-sm text-gray-500">{comment.time}</span>
                </div>
                <p className="text-sm text-gray-700 mt-1">{comment.text}</p>
                
                {/* Reactions */}
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <span className="text-sm">👍</span>
                    <span className="text-sm text-gray-500">{comment.reactions.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm">😊</span>
                    <span className="text-sm text-gray-500">{comment.reactions.smiles}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm">💬</span>
                    <span className="text-sm text-gray-500">{comment.reactions.comments}</span>
                  </div>
                  <button className="text-sm text-gray-500 hover:text-gray-700">Reply</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;