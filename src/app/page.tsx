import NewVideos from "@/components/NewVideos/NewVideos";

export default function Home() {
  return (
    <div className="">
      <p>Hello world {process.env.VIMP_API_KEY}</p>
        <NewVideos/>
    </div>
  )
}
