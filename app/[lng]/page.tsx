import Landing from "@/src/widgets/Landing";

export default async function Home({ params: { lng } }: { params: { lng: string } }) {
  return <Landing lng={lng} />;
}
