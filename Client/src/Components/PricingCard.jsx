import { Zap, CirclePlus } from "lucide-react"
import { Link } from 'react-router-dom'
export const PricingCard = ({ pricingDetail, buttonStyle, borderStyle,priceStyle,index }) => {
    return (
        <div className={`w-82 min-h-full m-2 p-6 flex flex-col rounded-lg  ${borderStyle}`}>
            <h4 className="text-white text-xl font-semibold leading-10 ">{pricingDetail.plan}</h4>
            <p className={`text-neutral-500 text-3xl font-bold ${priceStyle}`}>{pricingDetail.price}</p>
            <p className="text-neutral-500 mb-5 pt-2">{pricingDetail.description}</p>
            <hr className="text-neutral-500" />
            <ul className="text-white py-6">
                {pricingDetail.features.map((feature, index) => (
                    <li key={index} className="flex gap-3 py-1 items-center "><Zap color="indigo" size={'20px'} fill="blue" />{feature}</li>
                ))}
            </ul>
            {index == 0 ? <div></div> :<hr className="text-neutral-500" /> }
            

            {pricingDetail.creditSystem && (
                <ul className="text-white py-2 flex flex-col gap-2">
                    <li>{pricingDetail.creditSystem.description}</li>
                    <li className="flex gap-3 items-center">
                        <CirclePlus color="white" fill="indigo" />{pricingDetail.creditSystem.buyCredit}</li>
                    <li className="text-neutral-500 text-sm pt-4">{pricingDetail.creditSystem.note}</li>
                </ul>
            )}
            <button className={`rounded-lg py-2 px-5 ${buttonStyle} font-semibold`}><Link to={'/payment'}>{pricingDetail.buttonTitle}</Link></button>
        </div >

    )
}
