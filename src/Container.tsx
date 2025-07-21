import { SiNetflix, SiAmazon, SiSpotify } from 'react-icons/si';

interface Post {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string;
  postedBy: {
    name: string;
    avatar: string;
  };
  date: string;
  comments: number;
  shares: number;
  votes: string;
}

const Container = () => {
  const posts = [
    {
      id: '1',
      title: 'Netflix',
      icon: <SiNetflix className="w-[40px] h-[40px] text-[#E50914]" />,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      postedBy: {
        name: 'Gladys Alexander',
        avatar: '👤'
      },
      date: 'July 15, 2012 9:43 PM',
      comments: 716,
      shares: 364,
      votes: '50K'
    },
    {
      id: '2',
      title: 'Amazon',
      icon: <SiAmazon className="w-[40px] h-[40px] text-[#FF9900]" />,
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      postedBy: {
        name: 'Claire Cooper',
        avatar: '👤'
      },
      date: 'March 25, 2014 4:32 AM',
      comments: 624,
      shares: 119,
      votes: '182K'
    },
    {
      id: '3',
      title: 'Spotify',
      icon: <SiSpotify className="w-[40px] h-[40px] text-[#1DB954]" />,
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      postedBy: {
        name: 'Serenity Murphy',
        avatar: '👤'
      },
      date: 'May 23, 2019 11 PM',
      comments: 831,
      shares: 230,
      votes: '197K'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Feedback Input Section */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4">
          <textarea
            placeholder="Type your feedback here..."
            className="w-full min-h-[100px] p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-300 resize-none"
          />
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500">280</span>
            <button className="bg-[#F7931E] text-white px-6 py-2 rounded-lg hover:bg-[#E88A1B] transition-colors">
              SUBMIT
            </button>
          </div>
        </div>
      </div>

      {/* Posts Section */}
      <div className="bg-white rounded-lg border border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h1 className="text-[15px] font-medium text-gray-900">Popular</h1>
          <nav className="flex items-center">
            <button className="px-2 py-1 text-sm font-medium text-gray-900 bg-gray-100 rounded hover:bg-gray-200">
              Hot
            </button>
            <button className="px-2 py-1 text-sm text-gray-600 hover:text-gray-900 ml-2">
              New
            </button>
            <button className="px-2 py-1 text-sm text-gray-600 hover:text-gray-900 ml-2">
              Controversial
            </button>
            <button className="px-2 py-1 text-sm text-gray-600 hover:text-gray-900 ml-2">
              Rising
            </button>
            <button className="px-2 py-1 text-sm text-gray-600 hover:text-gray-900 ml-2">
              Top
            </button>
          </nav>
        </div>

        {/* Posts List */}
        <div>
          {posts.map((post) => (
            <div key={post.id} className="hover:bg-gray-50">
              <div className="flex p-3 gap-3">
                {/* Icon */}
                <div className="flex-shrink-0 flex items-center justify-center w-[58px] h-[58px] bg-gray-50 rounded">
                  {post.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-[15px] font-medium leading-5 text-gray-900">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-700 mb-2 line-clamp-2">
                    {post.content}
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>Posted by</span>
                    <span className="font-medium ml-1">{post.postedBy.name}</span>
                    <span className="ml-2">{post.date}</span>
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex items-start gap-8">
                  {/* Comments Section */}
                  <div className="flex flex-col items-start gap-1">
                    <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                      <span className="text-xs">{post.comments} Comments</span>
                    </button>
                  </div>

                  {/* Votes Section */}
                  <div className="flex flex-col items-center">
                    <button className="text-orange-500 hover:text-orange-600">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4l8 8h-6v8h-4v-8H4z" />
                      </svg>
                    </button>
                    <span className="text-[15px] font-medium my-1">{post.votes}</span>
                    <button className="text-gray-300 hover:text-gray-400">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 20l-8-8h6V4h4v8h6z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container;