import {Layout} from '@components/ui';
import {Banner, CallToAction, Services} from '@sections/index';

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Services />
      <CallToAction />
    </Layout>
  );
}
