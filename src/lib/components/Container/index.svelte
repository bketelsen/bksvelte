<script>
import Footer from '$lib/components/Footer/index.svelte';
import Header from '$lib/components/Header/index.svelte';
import Hero from '$lib/components/Hero/index.svelte';
import ScreenshotFeature from '$lib/components/Features/screenshot.svelte';
import GridFeature from '$lib/components/Features/grid.svelte';
import Testimonial from '$lib/components/Testimonials/index.svelte';
import BlogSection from '$lib/components/Sections/Blog/index.svelte';
import CTASection from '$lib/components/Sections/CTA/index.svelte';

</script>
<div class="bg-white">
	<div class="relative overflow-hidden">
    <Header></Header>	  
    <main>
        <Hero />
        <ScreenshotFeature />
        <GridFeature />

        <Testimonial />
        <BlogSection />
        <CTASection />

	  </main>
      <Footer></Footer>	
    </div>
  </div>
  




