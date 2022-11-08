import {Layout} from '@components/ui';
import {Banner, Boost, CallToAction, Gallery, Services} from '@sections/index';

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Services />
      <Boost />
      <Gallery />
      <CallToAction />
    </Layout>
  );
}
