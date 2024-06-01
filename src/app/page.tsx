import Header from "@/components/Layout/Header/Header";
import Home from "./home"

export default function Page({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  return (
    <Header>
      <Home page={searchParams?.page as string} />
    </Header>
  );
}
