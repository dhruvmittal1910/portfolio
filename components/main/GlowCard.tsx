import React from 'react'

interface GlowCardProps {
  card: {
    review: string;
    imgPath: string;
    logoPath: string;
    title: string;
    date: string;
    responsibilities: string[];
  };
  children: React.ReactNode;
  index:number;
}

const GlowCard: React.FC<GlowCardProps> = ({ children }) => {


  return (
    <div 
      className='card card-border timeline-card rounded-xl p-10'>
      {children}
    </div>
  )
}

export default GlowCard
