import React from 'react';
import {
  Dog,
  Users,
  Flame,
  Heart,
  ShoppingBag,
  Vote,
  HeartHandshake,
  Image
} from 'lucide-react';
import { Button } from './components/Button';
import { Feature } from './components/Feature';
import { Stats } from './components/Stats';
import { Roadmap } from './components/Roadmap';
import { SocialLinks } from './components/SocialLinks';

function App() {
  const features = [
    {
      icon: ShoppingBag,
      title: 'PawMart Marketplace',
      description: 'Buy pet products and exclusive NFTs in our decentralized marketplace.'
    },
    {
      icon: Vote,
      title: 'PawDAO Governance',
      description: 'Shape the future of PAWP through community voting and proposals.'
    },
    {
      icon: HeartHandshake,
      title: 'Support Animal Charities',
      description: 'Every transaction helps animal shelters and welfare organizations.'
    },
    {
      icon: Image,
      title: 'Meme Contests',
      description: 'Join fun contests and virtual pet shows to earn rewards.'
    }
  ];

  const stats = [
    { label: 'Total Supply', value: '1B PAWP' },
    { label: 'Burn Rate', value: '2%' },
    { label: 'Charity Rate', value: '3%' },
    { label: 'Holders', value: '10K+' }
  ];

  const roadmap = [
    {
      quarter: 'Q1 2025',
      items: ['Official launch', 'Community growth', 'Initial token distribution']
    },
    {
      quarter: 'Q2 2025',
      items: ['PawPals NFTs', 'PawDAO governance system']
    },
    {
      quarter: 'Q3 2025',
      items: ['Pet influencer partnerships', 'PawMart launch']
    },
    {
      quarter: 'Q4 2025',
      items: ['Global expansion', 'Staking features', 'Virtual pet show']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-6">
          <Dog className="w-16 h-16 text-purple-600" />
        </div>
        <h1 className="text-5xl font-bold mb-6">
          PawPenny (PAWP)
          <span className="block text-purple-600">The Ultimate MemeCoin for Pet Lovers!</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join the revolution that celebrates your love for pets while making a positive impact in the crypto space.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">Join PawPenny Now</Button>
          <Button size="lg" variant="secondary">Learn More</Button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features that Make Us Awesome</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tokenomics</h2>
          <Stats stats={stats} />
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Roadmap to a Better Future</h2>
          <div className="max-w-3xl mx-auto">
            <Roadmap items={roadmap} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Dog className="w-10 h-10 text-purple-400 mx-auto mb-6" />
            <div className="mb-6">
              <SocialLinks />
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 PawPenny. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-4 max-w-2xl mx-auto">
              Disclaimer: PawPenny is a memecoin and a speculative investment. Always do your research and only invest what you can afford to lose.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;