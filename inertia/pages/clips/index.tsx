import Page from '~/components/page'
import { usePage } from '@inertiajs/react'
import type Clip from '#models/clip'
import { Link } from '@adonisjs/inertia/react'
import { YoutubeVideos } from '~/components/youtube_videos'
import { getVideoId } from '~/lib/get_video_id'
import AppLayout from '~/layouts/app'

const Index = () => {
  const { clips, user } = usePage<{ clips: Clip[] }>().props
  return (
    <Page title="Liste des clips" hideTitle>
      <div className="container mx-auto">
        <h1 className="py-10">Liste des clips</h1>
        {user && (
          // A changer
          <Link route="clips.create" className={"btn btn-neutral"}>Ajouter un clip</Link>
        )}
        <div className="grid gap-2 lg:grid-cols-3">
          {clips.length > 0 &&
            clips.map((clip, i) => (
              <div key={i} className="border rounded-xl overflow-hidden p-2">
                <YoutubeVideos videoId={getVideoId(clip.url)} />
                <h2 className="text-2xl font-semibold">{clip.title}</h2>
              </div>
            ))}
        </div>
      </div>
    </Page>
  )
}

Index.layout = [AppLayout]

export default Index
