interface HashtagItem {
  tag: string;
  logo: string;
  selected?: boolean;
}

const HashtagList = () => {
  const hashtags: HashtagItem[] = [
    { tag: 'Starbucks', logo: '☕' },
    { tag: 'Netflix', logo: '🎬' },
    { tag: "McDonald's", logo: '🍔' },
    { tag: 'Amazon', logo: '📦' },
    { tag: 'Netflix', logo: '🎬', selected: true },
    { tag: 'Microsoft', logo: '💻' },
    { tag: 'Nike', logo: '👟' },
    { tag: "McDonald's", logo: '🍔' },
    { tag: 'Adidas', logo: '👟', selected: false },
    { tag: 'starbucks', logo: '☕' }
  ];

  return (
    <div className="flex flex-col space-y-2 p-4">
      {hashtags.map((item, index) => (
        <div
          key={`${item.tag}-${index}`}
          className={`
            flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-200 cursor-pointer w-full
            ${item.selected 
              ? 'bg-[#F7931E] border-[#F7931E] text-white' 
              : 'bg-white border-gray-100 hover:border-orange-200 hover:bg-orange-50'
            }
          `}
        >
          <span className={`text-lg ${item.selected ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}`}>
            {item.logo}
          </span>
          <span className={`text-sm flex-grow ${item.selected ? 'text-white' : 'text-gray-700 group-hover:text-orange-600'}`}>
            #{item.tag}
          </span>
          {item.selected && (
            <span className="text-white">✓</span>
          )}
        </div>
      ))}
    </div>
  )
}

export default HashtagList