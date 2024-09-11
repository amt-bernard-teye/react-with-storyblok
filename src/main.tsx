import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx';
import "./index.css";

import { storyblokInit, apiPlugin } from '@storyblok/react';
import Page from './storyblok/Page.tsx';
import Teaser from './storyblok/Teaser.tsx';
import Grid from './storyblok/Grid.tsx';
import Feature from './storyblok/Feature.tsx';
import Navbar from './storyblok/Navbar/Navbar.tsx';
import PageHeader from './storyblok/PageHeader.tsx';
import Blog from './storyblok/Blog/Blog.tsx';
import Button from './storyblok/Button/Button.tsx';
import Subscription from './storyblok/Subscription.tsx';
import Subscriber from './storyblok/Subscriber.tsx';
import Input from './storyblok/Input.tsx';
import Footer from './storyblok/Footer.tsx';
import Locator from './storyblok/Locator.tsx';
import Banner from './storyblok/Banner.tsx';
import Service from './storyblok/Service.tsx';

storyblokInit({
  accessToken: "9dtyHXK0YuRQuZ0rZBi8fgtt",
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    navbar: Navbar,
    page_header: PageHeader,
    blog: Blog,
    button: Button,
    subscription: Subscription,
    subscriber: Subscriber,
    input: Input,
    footer: Footer,
    locator: Locator,
    banner: Banner,
    service: Service
  },
  apiOptions: {
    region: "eu"
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
