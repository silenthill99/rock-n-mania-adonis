import AppLayout from '~/layouts/app'

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Bienvenue sur Rock&#39;n&#39;Mania</h1>
      <p className="mt-4 text-lg">
        Vivez au maximum votre passion pour l&#39;univers du Rock&#39;n&apos;roll
      </p>
    </div>
  )
}

Home.layout = [AppLayout]
