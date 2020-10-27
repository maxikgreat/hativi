import { BaseLayout } from '@/components/layouts';

export default function Home() {
  return (
    <BaseLayout className="home">
      <section class="singular-banner home-banner">
        <div class="container">
          <div class="singular-table-wrap">
            <div class="singular-align-wrap">
              <div class="singular-center-wrap">
                <h1 class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">Supercharge your design talks</h1>
                <p class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">On the other hand, we denounce with righteous indignation and dislike men who are</p>
                <a class="btn btn-red wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s" href="#0">Try for free</a>
                <a class="btn btn-border wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s" href="#0">See pricing</a>
                <span class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">Fully featured 30-day free trial</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="singular-explore-brands">
        <div class="container">
          <div class="singular-section-title center-style">
            <div class="container">
              <h2 class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">We love to explore new ways to <br />engage with brands and reach</h2>
              <p class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">Nor again is there anyone who loves or pursues or desires to<br /> obtain pain of itself, because it is pain, but because.</p>
            </div>
          </div>
          <div class="singular-video-wrap">
            <img class="wow bounceInUp"  data-wow-duration="1s" data-wow-delay="0.5s" src="images/video-poster.svg" alt="Video Poster" />
            <a class="play-icon wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s" href="#0"><img src="images/icons/play-icon.svg" alt="Play" /></a>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}
