import React from 'react'
import '../../../../styles/pages/_admin.scss'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
export default function FeatureInfo() {
    return (
        <div className="feature">
            <div className="featureItem">
                <span className="featureTitle">Revenue</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">$2.45</span>
                    <span className="featureMoneyRate">-11.4 <ArrowDownward className="featureIcon negative" /> </span>
                </div>
                <span className="featureSub">Compare to last month</span>
            </div>
            <div className="featureItem">
                <span className="featureTitle">Sales</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">$4.45</span>
                    <span className="featureMoneyRate">-1.4 <ArrowDownward className="featureIcon negative" /> </span>
                </div>
                <span className="featureSub">Compare to last month</span>
            </div>
            <div className="featureItem">
                <span className="featureTitle">Cost</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">$2.45</span>
                    <span className="featureMoneyRate">+1.4 <ArrowUpward className="featureIcon " /> </span>
                </div>
                <span className="featureSub">Compare to last month</span>
            </div>
        </div>
    )
}
