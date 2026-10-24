import { useState } from 'react'
import { PlayCircleIcon } from 'lucide-react'

type Props = {
  videoId: string
}

export const YoutubeVideos = ({ videoId }: Props) => {
  const [playable, setPlayable] = useState(false)
  return playable ? (
    <iframe
      className="max-w-full"
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  ) : (
    <div className="relative">
      <button
        onClick={() => setPlayable(true)}
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-red-600 rounded-full p-1"
      >
        <PlayCircleIcon className={"size-10"} />
      </button>
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt="Visuel"
        width={560}
        height={315}
      />
    </div>
  )
}
