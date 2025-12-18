import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { LAUNDRY_TIPS } from '../services/data';

export const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = LAUNDRY_TIPS.find(tip => tip.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-neutral-light flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-dark mb-4">Article Not Found</h1>
          <Link to="/laundry-tips" className="text-sky-main hover:underline">
            Back to Laundry Tips
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Image */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/laundry-tips"
              className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Laundry Tips
            </Link>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Meta Info */}
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
          <span className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-3 py-1 rounded-full text-sm font-medium">
            <Tag className="w-4 h-4" /> {article.category}
          </span>
          <span className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <Calendar className="w-4 h-4" /> December 2025
          </span>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {article.content.split('\n\n').map((paragraph, index) => {
            // Check if it's a heading (starts with a capital and is short)
            const isHeading = paragraph.length < 50 && !paragraph.includes(':') &&
                             paragraph === paragraph.split('\n')[0] &&
                             /^[A-Z]/.test(paragraph) && !paragraph.startsWith('-');

            if (isHeading && index > 0) {
              return (
                <h2 key={index} className="text-2xl font-heading font-bold text-neutral-dark mt-8 mb-4">
                  {paragraph}
                </h2>
              );
            }

            // Check for list items
            if (paragraph.startsWith('-')) {
              const items = paragraph.split('\n').filter(item => item.startsWith('-'));
              return (
                <ul key={index} className="list-disc list-inside space-y-2 my-4">
                  {items.map((item, i) => (
                    <li key={i} className="text-gray-600">{item.replace(/^- /, '')}</li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={index} className="text-gray-600 leading-relaxed mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-8 bg-sky-50 rounded-2xl">
          <h3 className="text-xl font-heading font-bold text-neutral-dark mb-4">
            Ready to try RK Products?
          </h3>
          <p className="text-gray-600 mb-6">
            Experience the cleaning power of RK Liquid Detergents for yourself.
            Contact us to place your order today!
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="bg-sky-main hover:bg-sky-deep text-white px-6 py-3 rounded-full font-bold transition-colors"
            >
              View Products
            </Link>
            <Link
              to="/cart"
              className="border-2 border-sky-main text-sky-main hover:bg-sky-main hover:text-white px-6 py-3 rounded-full font-bold transition-colors"
            >
              Order Now
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-heading font-bold text-neutral-dark mb-8">
            More Laundry Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LAUNDRY_TIPS.filter(tip => tip.id !== id).slice(0, 3).map(tip => (
              <Link
                key={tip.id}
                to={`/article/${tip.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="h-32 overflow-hidden">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-medium text-sky-600">{tip.category}</span>
                  <h4 className="font-bold text-neutral-dark mt-1 group-hover:text-sky-main transition-colors">
                    {tip.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
