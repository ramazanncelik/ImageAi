import HomePageContainer from '@/containers/home-page-container'
import { HomePageProvider } from '@/containers/home-page-container/useHomepage'

const HomePage = () => {
  return (
    <HomePageProvider>
      <HomePageContainer />
    </HomePageProvider>
  );
}

export default HomePage;