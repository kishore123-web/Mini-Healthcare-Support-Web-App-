import React from 'react';

export default function Testimonials() {
  const baseReviews = [
    {
      name: "Priya Sharma",
      location: "Mumbai, Beneficiary",
      content: "When my father needed oxygen late at night, Jarurat Care connected us to a volunteer within 12 minutes. Truly a lifesaver.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_D7-SaeT9h0rOZNkUFvvPw7pc_suL_SmC0dJQGKqNbbLcrt7Rfl7hCyoH3wJcsHK4EecZ6agE52pdyLt0IPAB3V-cgrUpYRxNB05ws_XyOq59i5d3TwsMCeMDlQu5AXj7F5p92l0IwyqvAmahY3zjuICk_g1Mi3GTtPnmiat3S8OZV-VLLtlJfq2_Vj1h4tK0Ow9n7NK3DTFsvq7O1aclQqVlKKRwiE6WjKfEIJ01N-LENgvpJ458h-f9EMBvVPbp5BBKKeOfJeE"
    },
    {
      name: "Arjun Mehta",
      location: "Delhi, Volunteer",
      content: "Being able to help people in my own neighborhood through this platform has given me a deep sense of purpose. The AI coordination is seamless.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8LDpgPc6pQxx2a_OA6yUgZVS_EfVxTY0VRA5aFYKP49N1-4WInF8tUmgYdhA70mFp2lD1GndJzFON_K8Sklu02C1ZaNlT47YYTLgAyIuYLyv3557AMukepxGTNWA8C_4K7UNlwhMGQCNsQM3IXuNlf0_gP5pOXO5x3dLaGy3PYKzjEARQaThqt7MOW-LiNpWcaCm5570p2gMBD5S8mkUijK8V2cbIVrEUTwFzSyt6o9NdkU-ow2-tOzpk8nCb5UjJIkuxOM8aP80"
    },
    {
      name: "Dr. Anjali Rao",
      location: "Bangalore, NGO Partner",
      content: "The platform reduces our administrative load by 60%, allowing us to focus entirely on clinical delivery and care.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuC1bSMp7R_BR1oLsWtYd_goRfwKrNomHOwfHHJZ_vrSuRS22GU-ldjfu-INO3yC7YfjWklYTCfPH7_FJhsE2c32qD5dJBtbCQNY2YnHAviTqyyCWoX8HQWtYPvXeQ93fuQ4YC1jADIOmLxUdKmpOxiicWLY65GffAu68XOmC-0whQNNxSUs-bsPoT4vUswNvFH4-AUbEg_m101qBjqv9EDD5zkNtLUmJmh6LYPuYCkz89lLucnXaFAlK61sIXPnzagXa4kRmG4OE"
    },
    {
      name: "Vikram Singh",
      location: "Jaipur, Blood Donor",
      content: "Jarurat Care notified me when a rare AB- patient needed blood urgently. I was able to donate within hours and save a life.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZQ6xQ3qT4b9O_tC24W-8cMv-8H9Z1xZ_P_b_Jk6Xz3Xm_pLZM4Yy3M5N4z5G5V7yL35T-U7I4M9T1S3t_8r_q_6_7Y_o_L4w_t_X_Z_QHQxG6F-"
    },
    {
      name: "Neha Gupta",
      location: "Pune, Beneficiary",
      content: "My grandmother needed immediate medical transport. The volunteer response time was incredible, getting an ambulance to us instantly.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwX8wR2rW6yY-rXkVl8gJ_pE2zH_kF7M5gY_nQ8C6mR_kL4wZ8mY2Z_qB3Z5xJ-yC_tZ_w_b_K_pH_D_H_8N_wA6K_s_5Y-o8Z_L6k_jT_1Y_5J4X"
    },
    {
      name: "Dr. Rajesh Kumar",
      location: "Chennai, Medical Expert",
      content: "Providing free consultations to rural areas has never been easier. This platform bridges the urban-rural healthcare gap brilliantly.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZh5gP_wW4sN_kL4rF5mZ8xJ_mV_uP_zG_qY_hR6nM8kH_5wT8cM_5xV2zZ-jC_hJ_lZ_q_6_2M_sZ_H_2J-yG_tL_pR_7wZ_wY-mH_5B_K_"
    },
    {
      name: "Sanjay Patel",
      location: "Ahmedabad, Volunteer",
      content: "I started as a driver helping deliver oxygen cylinders. The community here is so supportive; it's a blessing to be a part of it.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzM_zW4xZ-K8lZ4cV_sW-8H_7gZ-3QyH6dJ_fX_pK4mY_qJ5nN8hT2tL5lR_yL4bP_yZ-tR_K4J-vK_H_7Q_zT6kM_tY_1wX_6Q_K_K_b_"
    },
    {
      name: "Meera Reddy",
      location: "Hyderabad, Beneficiary",
      content: "Finding specialized post-op care was tough until we used Jarurat Care. They connected us with the right physical therapists locally.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzG_xZ4sY-J8kZ_qW_qZ_tZ_pH-4L4rG_pH_mQ6cT_nN8yZ_H_Z8hP5lX_bR_5M_bZ_zZ_qZ_qJ_xH_zK_X4M_zL_qZ_4wW_3wM_cQ_H_"
    },
    {
      name: "Amit Desai",
      location: "Surat, NGO Partner",
      content: "The real-time tracking of relief supplies allows our NGO to distribute meals and medicine with 100% transparency. Fantastic tool.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQk3lT_sQ4xZ_pY_zK_wY-6Y_3H_5P4nJ_kX_lP5aK_xL_uJ_qL_zK_4G5xQ_mT_wH_pX_kZ_aJ_zV_wJ_zV_X_7gL_5xZ_H_tX_zZ_"
    },
    {
      name: "Roshni Sen",
      location: "Kolkata, Mental Health Expert",
      content: "Digital counseling sessions have increased dramatically. It's heartwarming to see this platform prioritize emotional well-being.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfZ_wM_wP-5cZ_pY_bX_kW_3xL_vK_qK_bP_aZ4yX4xJ_oH_gJ_tL_sK_8Z5xJ_mR_zL_bT_gZ_aK_xL_qW_oM_vZ_qV_4qW_M_qX_gZ_"
    }
  ];

  const duplicatedReviews = [...baseReviews, ...baseReviews];

  return (
    <section className="py-16 md:py-20 bg-surface relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 mb-10">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold font-headline mb-4 tracking-tight">Stories of Hope</h2>
        <p className="text-center text-on-surface-variant font-body mb-8 max-w-2xl mx-auto">Real experiences from those we've helped and the heroes making it happen.</p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-8 pl-8 hover:[animation-play-state:paused]">
          {duplicatedReviews.map((t, idx) => (
            <div key={idx} className="w-[350px] md:w-[450px] shrink-0 glass-panel bg-gradient-to-br from-white to-surface-container-lowest p-8 rounded-3xl border border-primary/10 shadow-lg shadow-primary/5 hover:border-primary/20 transition-all group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 rounded-full bg-surface-container-low overflow-hidden border border-primary/10 shrink-0">
                   {/* In case mock URLs fail, fallback to a solid color block by using error boundary or default bg */}
                   <img 
                    className="w-full h-full object-cover" 
                    alt={t.name} 
                    src={t.avatar} 
                    onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}
                   />
                   <div style={{display: 'none'}} className="w-full h-full bg-primary/10 items-center justify-center text-primary font-bold text-xl">{t.name.charAt(0)}</div>
                </div>
                <div>
                  <h4 className="font-bold text-lg font-headline text-on-surface group-hover:text-primary transition-colors">{t.name}</h4>
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold mt-1 opacity-80">{t.location}</p>
                </div>
              </div>
              <p className="text-on-surface-variant italic leading-relaxed font-body text-[15px]">"{t.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
