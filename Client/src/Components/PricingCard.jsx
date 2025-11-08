import { Zap, Crown, Sparkles } from "lucide-react"
import { Link } from 'react-router-dom'

export const PricingCard = ({ pricingDetail, buttonStyle, borderStyle, priceStyle, index }) => {
    return (
        <div className={`w-full min-h-full p-6 flex flex-col rounded-xl relative ${borderStyle}`}>
            {/* Badge for popular/best value */}
            {pricingDetail.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        {pricingDetail.badge === 'Most Popular' ? <Crown size={12} /> : <Sparkles size={12} />}
                        {pricingDetail.badge}
                    </div>
                </div>
            )}

            <div className="flex-1">
                <h4 className="text-white text-2xl font-bold mb-2">{pricingDetail.plan}</h4>
                <p className={`text-4xl font-bold mb-2 ${priceStyle || 'text-neutral-400'}`}>
                    {pricingDetail.displayPrice || pricingDetail.price}
                </p>
                <p className="text-neutral-400 mb-6 text-sm">{pricingDetail.description}</p>
                
                <hr className="border-neutral-700 mb-6" />
                
                <ul className="text-white space-y-3 mb-6">
                    {pricingDetail.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                            <Zap className="text-indigo-500 flex-shrink-0 mt-1" size={18} fill="currentColor" />
                            <span className="text-neutral-200">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <Link to={'/Signup'} className="w-full mt-auto">
                <button className={`rounded-lg w-full py-3 px-5 ${buttonStyle} font-semibold cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg`}>
                    {pricingDetail.buttonTitle}
                </button>
            </Link>
        </div>
    )
}
