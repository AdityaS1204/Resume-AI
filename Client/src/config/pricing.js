export const pricingConfig = {
  INR: {
    currency: 'INR',
    symbol: '₹',
    country: 'India',
    plans: [
      {
        plan: "Starter",
        price: 0,
        displayPrice: "Free",
        description: "Perfect for trying out",
        resumesIncluded: 3,
        buttonTitle: "Start for free",
        features: [
          "3 AI-generated resumes (lifetime)",
          "Basic templates",
          "PDF download",
          "ATS-optimized formatting",
          "Unlimited ATS score checks"
        ]
      },
      {
        plan: "Plus",
        price: 99,
        displayPrice: "₹99/month",
        description: "For active job seekers",
        resumesIncluded: 15,
        buttonTitle: "Upgrade to Plus",
        badge: "Most Popular",
        features: [
          "15 AI resumes per month",
          "10 AI cover letters/month",
          "All premium templates",
          "GitHub project auto-import",
          "Advanced job matching",
          "Priority email support"
        ]
      },
      {
        plan: "Pro",
        price: 199,
        displayPrice: "₹199/month",
        description: "For serious professionals",
        resumesIncluded: "unlimited",
        buttonTitle: "Upgrade to Pro",
        badge: "Best Value",
        features: [
          "Unlimited AI resumes",
          "Unlimited cover letters",
          "All premium templates",
          "GitHub project auto-import",
          "Resume analytics dashboard",
          "Priority support",
          "Early access to features"
        ]
      }
    ]
  },
  USD: {
    currency: 'USD',
    symbol: '$',
    country: 'International',
    plans: [
      {
        plan: "Starter",
        price: 0,
        displayPrice: "Free",
        description: "Perfect for trying out",
        resumesIncluded: 3,
        buttonTitle: "Start for free",
        features: [
          "3 AI-generated resumes (lifetime)",
          "Basic templates",
          "PDF download",
          "ATS-optimized formatting",
          "Unlimited ATS score checks"
        ]
      },
      {
        plan: "Plus",
        price: 9,
        displayPrice: "$9/month",
        description: "For active job seekers",
        resumesIncluded: 15,
        buttonTitle: "Upgrade to Plus",
        badge: "Most Popular",
        features: [
          "15 AI resumes per month",
          "10 AI cover letters/month",
          "All premium templates",
          "GitHub project auto-import",
          "Advanced job matching",
          "Priority email support"
        ]
      },
      {
        plan: "Pro",
        price: 19,
        displayPrice: "$19/month",
        description: "For serious professionals",
        resumesIncluded: "unlimited",
        buttonTitle: "Upgrade to Pro",
        badge: "Best Value",
        features: [
          "Unlimited AI resumes",
          "Unlimited cover letters",
          "All premium templates",
          "GitHub project auto-import",
          "Resume analytics dashboard",
          "Priority support",
          "Early access to features"
        ]
      }
    ]
  }
};

/**
 * Get pricing based on user's location
 * @param {boolean} isIndia 
 * @returns {object} Pricing configuration
 */
export const getPricingForUser = (isIndia) => {
  return pricingConfig[isIndia ? 'INR' : 'USD'];
};

export const faqItems = [
  {
    title: "Why are prices different based on location?",
    content: "We offer regional pricing to make our tool accessible to job seekers worldwide. Similar to how Netflix, Spotify, and other global services work, we adjust prices based on purchasing power to ensure everyone can benefit from AI-powered resume building."
  },
  {
    title: "What do I get in the Free Starter plan?",
    content: "The Starter plan allows you to create up to 3 AI-generated resumes (lifetime). You'll get access to basic templates, ATS-optimized formatting, PDF downloads, and unlimited ATS score checks. Perfect for trying out our service!"
  },
  {
    title: "What happens when I use up my monthly resumes?",
    content: "On the Plus plan, your 15 resumes reset each month. On the Pro plan, you have unlimited resumes. Free users get 3 resumes total (lifetime). You can upgrade anytime to generate more resumes."
  },
  {
    title: "Are ATS score checks unlimited?",
    content: "Yes! All plans (including Free) get unlimited ATS score checks. Only resume generation counts against your limit. Check your resume as many times as you want!"
  },
  {
    title: "Can I upgrade or downgrade anytime?",
    content: "Yes! You can upgrade anytime to generate more resumes. If you downgrade, you'll keep access to all previously created resumes and can continue to download them."
  },
  {
    title: "Do unused resumes roll over to next month?",
    content: "Monthly resumes reset on your billing date and don't roll over. However, with the Pro plan's unlimited resumes, you never have to worry about running out!"
  },
  {
    title: "What payment methods do you accept?",
    content: "We accept all major credit/debit cards, UPI (for India), and other local payment methods through our secure payment processor. All transactions are encrypted and secure."
  }
];

